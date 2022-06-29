import { Schema } from 'mongoose';

export interface ITournament {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionGoals: number;
  editionStrikers: string[];
  bestPlayer: string;
  bestGoalkeeper: string;
  bestYoungPlayer: string;
}

export const tournamentSchema = new Schema<ITournament>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number },
  editionStrikers: { type: [String], required: true },
  bestPlayer: { type: String, required: true },
  bestGoalkeeper: { type: String },
  bestYoungPlayer: { type: String, required: true },
});
