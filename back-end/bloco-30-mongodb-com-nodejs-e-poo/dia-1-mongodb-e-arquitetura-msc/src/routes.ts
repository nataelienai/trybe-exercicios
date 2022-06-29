import { Router } from 'express';
import { TournamentController } from './controllers/tournament';

const tournamentController = new TournamentController();

export const routes = Router();

routes.get('/tournaments', (req, res) => tournamentController.findAll(req, res));
routes.get('/tournaments/:year', (req, res) => tournamentController.findByYear(req, res));
routes.post('/tournaments', (req, res) => tournamentController.create(req, res));
routes.put('/tournaments/:id', (req, res) => tournamentController.update(req, res));
