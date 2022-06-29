import { Request, Response } from 'express';
import { TournamentService } from "../services/tournament";

export class TournamentController {
  constructor(private tournamentService = new TournamentService()) {}

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const tournaments = await this.tournamentService.findAll();
      res.status(200).json(tournaments);
    } catch {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async findByYear(req: Request, res: Response): Promise<Response> {
    const year = Number(req.params.year);
    try {
      const tournament = await this.tournamentService.findByYear(year);
      if (!tournament) {
        return res.status(404).json({ message: `There was no world cup in ${year}` });
      }
      return res.status(200).json(tournament);
    } catch {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
