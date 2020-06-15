import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
    app.use('/movie', route);

    route.get('/', async (req: Request, res: Response) => {
        res.send("present all movies");
        res.end();
    });
};