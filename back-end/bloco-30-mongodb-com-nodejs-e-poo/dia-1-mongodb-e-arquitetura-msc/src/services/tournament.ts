import { ITournament } from "../database/schemas/tournament";
import { TournamentModel } from "../models/tournament";

export class TournamentService {
  constructor(private tournamentModel = new TournamentModel()) {}

  async findAll(): Promise<ITournament[]> {
    return this.tournamentModel.findAll();
  }

  async findByYear(year: number): Promise<ITournament | null> {
    return this.tournamentModel.findByYear(year);
  }

  async create(tournament: ITournament): Promise<ITournament> {
    return this.tournamentModel.create(tournament);
  }

  async update(id: string, tournament: ITournament): Promise<ITournament | null> {
    return this.tournamentModel.update(id, tournament);
  }

  async delete(id: string): Promise<ITournament | null> {
    return this.tournamentModel.delete(id);
  }
}
