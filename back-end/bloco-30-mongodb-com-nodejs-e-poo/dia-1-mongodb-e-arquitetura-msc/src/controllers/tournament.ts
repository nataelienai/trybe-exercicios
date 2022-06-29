import { Request, Response } from 'express';
import { TournamentService } from "../services/tournament";

export class TournamentController {
  constructor(private tournamentService = new TournamentService()) {}

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const tournaments = this.tournamentService.findAll();
      res.status(200).json(tournaments);
    } catch {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
