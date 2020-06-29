import Category from "../data-objects/ICategory";
import ICategoryService from "./ICategoryService";
import { CategoryModel } from "../models/CategoryModel";
import db from "../loaders/database";

export default class CategoryService implements ICategoryService {

    public async save(category: Category): Promise<Category> {
        try {
            const categoryData: CategoryModel = await db.Category.findOne({where: {name: category.name}});
            if (categoryData) {
                const updatedCategory: Category = await categoryData.update(category, {where: {name: category.name}});
                return updatedCategory;
            }

            const createdCategory: Category = await db.Category.create(category);
            return createdCategory;
        } catch (error) {
            return null;
        } 
     }

    public async delete(id: number): Promise<object> {
        try {
            const deletedId: number = await db.Category.destroy({where: {id: id}});
            return deletedId > 0 ? {message: "success"} : {message: "error"};
        } catch (error) {
            return {message: "error"};
        }        
    }

    public async findAll(): Promise<Array<Category>> {
        try {
            const movieData: Array<Category> = await db.Category.findAll();
            return movieData;
        } catch (error) {
            return null;
        }        
    }

    public async findById(id: number): Promise<Category> {
        try {
            return await db.Category.findByPk(id);
        } catch (error) {
            return null;
        }       
    }

    public async findMoviesByCategoryId(id: number): Promise<Category> {
        try {
            return await db.Category.findByPk(id, {include: [db.Movie]});
        } catch (error) {
            return null;
        }
    }
}