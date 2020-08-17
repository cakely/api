import L from '../../common/logger';

let id = 0;
interface Cake {
  id: number;
  name: string;
  recipeUrl: string;
  photoUrl: string;
  rating: number;
}

const cakes: Cake[] = [
  {
    id: id++,
    name: 'Battenburg',
    recipeUrl:
      'https://www.allrecipes.com/search/results/?wt=battenburg&sort=re',
    photoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Battenbergcake.jpg/600px-Battenbergcake.jpg',
    rating: 5.0,
  },
  {
    id: id++,
    name: 'Bakewell',
    recipeUrl: 'https://www.allrecipes.com/search/results/?wt=bakewell&sort=re',
    photoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bakewell_tart_on_a_plate.jpg/480px-Bakewell_tart_on_a_plate.jpg',
    rating: 4.0,
  },
];

export class CakesService {
  all(): Promise<Cake[]> {
    L.info(cakes, 'fetch all cakes');
    return Promise.resolve(cakes);
  }

  byId(id: number): Promise<Cake> {
    L.info(`fetch cake with id ${id}`);
    return this.all().then((r) => r[id]);
  }

  create(
    name: string,
    recipeUrl: string,
    photoUrl: string,
    rating: number
  ): Promise<Cake> {
    L.info(`create cake with name ${name}`);
    const cake: Cake = {
      id: id++,
      name,
      recipeUrl,
      photoUrl,
      rating,
    };
    cakes.push(cake);
    return Promise.resolve(cake);
  }
}

export default new CakesService();
