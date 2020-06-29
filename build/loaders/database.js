"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const MovieModel_1 = require("../models/MovieModel");
const CategoryModel_1 = require("../models/CategoryModel");
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env.SQLDATABASE, process.env.SQLUSERNAME, process.env.SQLPASSWORD, {
    host: process.env.SQLHOST,
    port: parseInt(process.env.SQLPORT),
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
MovieModel_1.movieModelInit(sequelize);
CategoryModel_1.categoryModelInit(sequelize);
CategoryModel_1.CategoryModel.hasMany(MovieModel_1.MovieModel, { foreignKey: { allowNull: false } });
const db = {
    sequelize,
    Sequelize: sequelize_1.Sequelize,
    Movie: MovieModel_1.MovieModel,
    Category: CategoryModel_1.CategoryModel
};
sequelize.authenticate();
sequelize.sync();
exports.default = db;
//# sourceMappingURL=database.js.map