import { Router } from 'express';
import { TournamentController } from './controllers/tournament';

const tournamentController = new TournamentController();

export const routes = Router();

routes.get('/tournaments', (req, res) => tournamentController.findAll(req, res));
