"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../loaders/database"));
class MovieService {
    async save(movie) {
        const movieCreated = await database_1.default.Movie.create(movie);
        console.log(movieCreated);
    }
}
exports.default = MovieService;
//# sourceMappingURL=MovieService.js.map