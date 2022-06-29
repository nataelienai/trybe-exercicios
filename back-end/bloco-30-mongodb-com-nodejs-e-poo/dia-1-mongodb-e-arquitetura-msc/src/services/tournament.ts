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
}
