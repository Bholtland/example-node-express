import sequelize from "../loaders/database";
import { Model, Sequelize, STRING, INTEGER } from 'sequelize';

export class MovieModel extends Model {
    public id: number;
    public name: string;
    public duration: number;
}

export function movieModelInit(sequelize: Sequelize): void {
    MovieModel.init(
        {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: STRING,
                allowNull: false
            },
            duration: {
                type: INTEGER,
                allowNull: false
            }
        }, 
        {
            sequelize,
            modelName: 'movie'
        }
    );
}

export default MovieModel;