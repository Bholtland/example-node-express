"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../loaders/database"));
class CategoryService {
    async save(category) {
        try {
            const categoryData = await database_1.default.Category.findOne({ where: { name: category.name } });
            if (categoryData) {
                const updatedCategory = await categoryData.update(category, { where: { name: category.name } });
                return updatedCategory;
            }
            const createdCategory = await database_1.default.Category.create(category);
            return createdCategory;
        }
        catch (error) {
            return null;
        }
    }
    async delete(id) {
        try {
            const deletedId = await database_1.default.Category.destroy({ where: { id: id } });
            return deletedId > 0 ? { message: "success" } : { message: "error" };
        }
        catch (error) {
            return { message: "error" };
        }
    }
    async findAll() {
        try {
            const movieData = await database_1.default.Category.findAll();
            return movieData;
        }
        catch (error) {
            return null;
        }
    }
    async findById(id) {
        try {
            return await database_1.default.Category.findByPk(id);
        }
        catch (error) {
            return null;
        }
    }
    async findMoviesByCategoryId(id) {
        try {
            return await database_1.default.Category.findByPk(id, { include: [database_1.default.Movie] });
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = CategoryService;
//# sourceMappingURL=CategoryService.js.map