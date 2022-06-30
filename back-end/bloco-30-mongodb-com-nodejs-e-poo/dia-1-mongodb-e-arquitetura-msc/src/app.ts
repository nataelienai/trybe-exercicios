import express from 'express';
import { createConnection } from './database/connection';
import { routes } from './routes';

export class App {
  public server = express();

  constructor() {
    this.server.use(express.json());
    this.server.use(routes);
  }

  start(port: number) {
    createConnection();
    this.server.listen(port, () => console.log(`Server running on port ${port}`));
  }
}
