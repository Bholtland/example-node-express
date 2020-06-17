"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MovieController_1 = __importDefault(require("./routes/MovieController"));
exports.default = () => {
    const app = express_1.Router();
    MovieController_1.default(app);
    app.get('*', function (req, res) {
        res.json('404').status(404);
    });
    return app;
};
//# sourceMappingURL=index.js.map