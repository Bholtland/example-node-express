"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MovieController_1 = __importDefault(require("./routes/MovieController"));
const CategoryController_1 = __importDefault(require("./routes/CategoryController"));
exports.default = () => {
    const app = express_1.Router();
    MovieController_1.default(app);
    CategoryController_1.default(app);
    app.get('*', function (req, res) {
        res.status(404);
        res.json('404');
        res.end();
    });
    return app;
};
//# sourceMappingURL=index.js.map