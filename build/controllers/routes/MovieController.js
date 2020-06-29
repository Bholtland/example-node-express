"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MovieService_1 = __importDefault(require("../../service/MovieService"));
const Movie_1 = __importDefault(require("../../data-objects/Movie"));
const route = express_1.Router();
exports.default = (app) => {
    const movieService = new MovieService_1.default();
    app.use('/movie', route);
    route.get('/', async (req, res) => {
        const result = await movieService.findAll();
        res.json(result);
        res.end();
    });
    route.get('/:id', async (req, res) => {
        const result = await movieService.findById(parseInt(req.params.id));
        res.json(result);
        res.end();
    });
    route.post('/', async (req, res) => {
        const movieData = new Movie_1.default(req.body.name, req.body.duration);
        const result = await movieService.save(movieData);
        res.json(result);
        res.end();
    });
    route.delete('/:id', async (req, res) => {
        const result = await movieService.delete(parseInt(req.params.id));
        res.json(result);
        res.end();
    });
};
//# sourceMappingURL=MovieController.js.map