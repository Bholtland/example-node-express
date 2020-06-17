"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_2 = __importDefault(require("./loaders/express"));
async function startServer() {
    try {
        dotenv_1.default.config();
        const app = await (express_1.default)();
        const server = http_1.default.createServer(app);
        express_2.default({ app });
        server.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }
    catch (error) {
        throw error;
    }
}
exports.startServer = startServer;
startServer();
//# sourceMappingURL=app.js.map