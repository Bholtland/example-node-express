import { Router } from 'express';
import movie from './routes/movie';

export default () => {
    const app = Router();
    movie(app);
	return app
}