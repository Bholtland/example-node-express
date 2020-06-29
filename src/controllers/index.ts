import { Router } from 'express';
import movie from './routes/MovieController';
import category from './routes/CategoryController';

export default () => {
    const app = Router();
    movie(app);
    category(app);

    app.get('*', function(req, res){
        res.status(404);
        res.json('404');
        res.end();
    });

	return app
}