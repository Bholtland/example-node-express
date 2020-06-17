import { Router } from 'express';
import movie from './routes/MovieController';

export default () => {
    const app = Router();
    movie(app);

    app.get('*', function(req, res){
        res.status(404);
        res.json('404');
        res.end();
    });

	return app
}