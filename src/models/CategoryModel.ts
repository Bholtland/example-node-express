import sequelize from "../loaders/database";
import { Model, Sequelize, STRING, INTEGER } from 'sequelize';
import { MovieModel } from "./MovieModel";

export class CategoryModel extends Model {
    public id: number;
    public name: string;
}

export function categoryModelInit(sequelize: Sequelize): void {

    CategoryModel.init(
        {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: STRING,
                allowNull: false
            }
        }, 
        {
            sequelize,
            modelName: 'category'
        }
    );
}