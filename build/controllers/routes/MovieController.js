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
    route.post('/', async (req, res) => {
        const movieObject = new Movie_1.default(req.body.name, req.body.duration);
        const result = await movieService.save(movieObject);
        res.send(result);
        res.end();
    });
};
//# sourceMappingURL=MovieController.js.map