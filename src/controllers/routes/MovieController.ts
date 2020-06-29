import { Router, Request, Response } from 'express';
import MovieService from '../../service/MovieService';
import Movie from '../../data-objects/Movie';
const route = Router();

export default (app: Router) => {
    const movieService: MovieService = new MovieService();
    app.use('/movie', route);

    route.get('/', async (req: Request, res: Response) => {
        const result: Array<Movie> = await movieService.findAll();
        res.json(result);
        res.end();
    });

    route.get('/:id', async (req: Request, res: Response) => {
        const result: Movie = await movieService.findById(parseInt(req.params.id));
        res.json(result);
        res.end();
    });

    route.post('/', async (req: Request, res: Response) => {
        const movieData: Movie = new Movie(req.body.name, req.body.duration);
        const result = await movieService.save(movieData);
        res.json(result);
        res.end();
    });

    route.delete('/:id', async (req: Request, res: Response) => {
        const result: object = await movieService.delete(parseInt(req.params.id));
        res.json(result);
        res.end();
    });
};