import { model } from 'mongoose';
import { ITournament, tournamentSchema } from '../schemas/tournament';

export const tournamentModel = model<ITournament>('tournaments', tournamentSchema);
