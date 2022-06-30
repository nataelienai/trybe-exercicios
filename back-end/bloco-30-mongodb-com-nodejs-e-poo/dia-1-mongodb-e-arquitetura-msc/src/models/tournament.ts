import { tournamentModel } from "../database/models/tournament"
import { ITournament } from "../database/schemas/tournament";

export class TournamentModel {
  async findAll(): Promise<ITournament[]> {
    return tournamentModel.find();
  }

  async findByYear(year: number): Promise<ITournament | null> {
    return tournamentModel.findOne({ year });
  }

  async create(tournament: ITournament): Promise<ITournament> {
    return tournamentModel.create(tournament);
  }

  async update(id: string, tournament: ITournament): Promise<ITournament | null> {
    return tournamentModel.findOneAndUpdate({ _id: id }, tournament, { new: true });
  }

  async delete(id: string): Promise<ITournament | null> {
    return tournamentModel.findOneAndDelete({ _id: id });
  }
}
