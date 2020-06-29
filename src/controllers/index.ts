import { Router } from 'express';
import movie from './routes/MovieController';
import category from './routes/CategoryController';

export default () => {
    const app = Router();

    // Set all routes.
    movie(app);
    category(app);

    // Set 404 not found route.
    app.get('*', function(req, res){
        res.status(404);
        res.json('404');
        res.end();
    });

	return app;
}