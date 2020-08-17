import { Application } from 'express';
import cakesRouter from './api/controllers/cakes/router';
export default function routes(app: Application): void {
  app.use('/api/v1/cakes', cakesRouter);
}
