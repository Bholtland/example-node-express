import { Router } from 'express';
import movie from './routes/MovieController';

export default () => {
    const app = Router();
    movie(app);
	return app
}