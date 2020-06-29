import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Models
import {movieModelInit, MovieModel} from '../models/MovieModel';
import {CategoryModel, categoryModelInit} from '../models/CategoryModel';

// Set environment variables.
dotenv.config();

// Instantiate sequelize ORM.
const sequelize = new Sequelize(process.env.SQLDATABASE, process.env.SQLUSERNAME, process.env.SQLPASSWORD, {
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

// Instantiate all DB models.
movieModelInit(sequelize);
categoryModelInit(sequelize);

// Set relations of DB models.
CategoryModel.hasMany(MovieModel, {foreignKey: {allowNull: false}});

// Create DB object with sequelize and models.
const db = {
    sequelize,
    Sequelize,
    Movie: MovieModel,
    Category: CategoryModel
}

sequelize.authenticate();
sequelize.sync();

export default db;