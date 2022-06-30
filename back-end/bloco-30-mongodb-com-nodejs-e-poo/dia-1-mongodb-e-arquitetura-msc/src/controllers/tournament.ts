import { Request, Response } from 'express';
import { TournamentService } from "../services/tournament";

export class TournamentController {
  constructor(private tournamentService = new TournamentService()) {}

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const tournaments = await this.tournamentService.findAll();
      return res.status(200).json(tournaments);
    } catch {
      return res.status(500).json({ message: 'Internal Server Error' });
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

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const tournament = await this.tournamentService.create(req.body);
      return res.status(201).json(tournament);
    } catch {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const tournament = await this.tournamentService.update(req.params.id, req.body);
      if (!tournament) {
        return res.status(404).json({ message: `Tournament not found` });
      }
      return res.status(200).json(tournament);
    } catch {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const tournament = await this.tournamentService.delete(req.params.id);
      if (!tournament) {
        return res.status(404).json({ message: `Tournament not found` });
      }
      return res.status(200).json(tournament);
    } catch {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
