import { Router, Request, Response } from 'express';
import CategoryService from '../../service/CategoryService';
import Category from '../../data-objects/Category';
const route = Router();

export default (app: Router) => {
    const categoryService: CategoryService = new CategoryService();
    app.use('/category', route);

    route.get('/', async (req: Request, res: Response) => {
        const result: Array<Category> = await categoryService.findAll();
        res.json(result);
        res.end();
    });

    route.get('/:id', async (req: Request, res: Response) => {
        const result: Category = await categoryService.findById(parseInt(req.params.id));
        res.json(result);
        res.end();
    });

    route.post('/', async (req: Request, res: Response) => {
        const categoryData: Category = new Category(req.body.name);
        const result = await categoryService.save(categoryData);
        res.json(result);
        res.end();
    });

    route.delete('/:id', async (req: Request, res: Response) => {
        const result: object = await categoryService.delete(parseInt(req.params.id));
        res.json(result);
        res.end();
    });

    route.get('/:id/movie', async (req: Request, res: Response) => {
        const result: Category = await categoryService.findMoviesByCategoryId(parseInt(req.params.id));
        res.json(result);
        res.end();
    });
};