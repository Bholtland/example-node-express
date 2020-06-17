"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class MovieModel extends sequelize_1.Model {
}
exports.MovieModel = MovieModel;
function movieModelInit(sequelize) {
    MovieModel.init({
        id: {
            type: sequelize_1.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize_1.STRING,
            allowNull: false
        },
        duration: {
            type: sequelize_1.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'movie'
    });
}
exports.movieModelInit = movieModelInit;
exports.default = MovieModel;
//# sourceMappingURL=MovieModel.js.map