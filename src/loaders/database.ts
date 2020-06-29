import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Models
import {movieModelInit, MovieModel} from '../models/MovieModel';
import {CategoryModel, categoryModelInit} from '../models/CategoryModel';

dotenv.config();

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

movieModelInit(sequelize);
categoryModelInit(sequelize);

CategoryModel.hasMany(MovieModel, {foreignKey: {allowNull: false}});

const db = {
    sequelize,
    Sequelize,
    Movie: MovieModel,
    Category: CategoryModel
}


sequelize.authenticate();
sequelize.sync();

export default db;