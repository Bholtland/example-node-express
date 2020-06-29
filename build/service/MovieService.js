"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../loaders/database"));
class MovieService {
    async save(movie) {
        try {
            const movieData = await database_1.default.Movie.findOne({ where: { name: movie.name } });
            if (movieData) {
                const updatedMovie = await movieData.update(movie, { where: { name: movie.name } });
                return updatedMovie;
            }
            const createdMovie = await database_1.default.Movie.create(movie);
            return createdMovie;
        }
        catch (error) {
            return null;
        }
    }
    async delete(id) {
        try {
            const deletedId = await database_1.default.Movie.destroy({ where: { id: id } });
            return deletedId > 0 ? { type: "success" } : { type: "error" };
        }
        catch (error) {
            return null;
        }
    }
    async findAll() {
        try {
            const movieData = await database_1.default.Movie.findAll();
            return movieData;
        }
        catch (error) {
            return null;
        }
    }
    async findById(id) {
        try {
            return await database_1.default.Movie.findByPk(id);
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = MovieService;
//# sourceMappingURL=MovieService.js.map