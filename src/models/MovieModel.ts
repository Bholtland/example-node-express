import sequelize from "../loaders/database";
import { Model, Sequelize, STRING, NUMBER } from 'sequelize';

class MovieModel extends Model {}

MovieModel.init(
    {
        name: {
            type: STRING,
            allowNull: false
        },
        duration: {
            type: NUMBER,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: 'movie',
        freezeTableName: true,
    }
);

export default MovieModel;