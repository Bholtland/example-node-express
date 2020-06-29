"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryService_1 = __importDefault(require("../../service/CategoryService"));
const Category_1 = __importDefault(require("../../data-objects/Category"));
const route = express_1.Router();
exports.default = (app) => {
    const categoryService = new CategoryService_1.default();
    app.use('/category', route);
    route.get('/', async (req, res) => {
        const result = await categoryService.findAll();
        res.json(result);
        res.end();
    });
    route.get('/:id', async (req, res) => {
        const result = await categoryService.findById(parseInt(req.params.id));
        res.json(result);
        res.end();
    });
    route.post('/', async (req, res) => {
        const categoryData = new Category_1.default(req.body.name);
        const result = await categoryService.save(categoryData);
        res.json(result);
        res.end();
    });
    route.delete('/:id', async (req, res) => {
        const result = await categoryService.delete(parseInt(req.params.id));
        res.json(result);
        res.end();
    });
    route.get('/:id/movie', async (req, res) => {
        const result = await categoryService.findMoviesByCategoryId(parseInt(req.params.id));
        res.json(result);
        res.end();
    });
};
//# sourceMappingURL=CategoryController.js.map