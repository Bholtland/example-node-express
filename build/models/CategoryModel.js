"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class CategoryModel extends sequelize_1.Model {
}
exports.CategoryModel = CategoryModel;
function categoryModelInit(sequelize) {
    CategoryModel.init({
        id: {
            type: sequelize_1.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize_1.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'category'
    });
}
exports.categoryModelInit = categoryModelInit;
//# sourceMappingURL=CategoryModel.js.map