import { Router, Request, Response } from 'express';
import MovieServiceImplementation from '../../service/MovieServiceImp';
const route = Router();

export default (app: Router) => {
    const movieService: MovieServiceImplementation = new MovieServiceImplementation();
    app.use('/movie', route);

    route.get('/', async (req: Request, res: Response) => {
        const result = await movieService.findAll();
        res.send(result);
        res.end();
    });
};