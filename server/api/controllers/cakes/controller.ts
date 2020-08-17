import CakesService from '../../services/cakes.service';
import { Request, Response } from 'express';

export class Controller {
  all(req: Request, res: Response): void {
    CakesService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    CakesService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    CakesService.create(
      req.body.name,
      req.body.recipeUrl,
      req.body.photoUrl,
      req.body.rating
    ).then((r) => res.status(201).location(`/api/v1/cakes/${r.id}`).json(r));
  }
}
export default new Controller();
