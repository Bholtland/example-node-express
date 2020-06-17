"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const controllers_1 = __importDefault(require("../controllers"));
const config_1 = __importDefault(require("../config"));
const express_session_1 = __importDefault(require("express-session"));
const corsOptions_1 = __importDefault(require("../config/corsOptions"));
const sessionSettings_1 = __importDefault(require("../config/sessionSettings"));
exports.default = async ({ app }) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');
    app.use(cors_1.default(corsOptions_1.default));
    app.use(body_parser_1.default.json());
    app.use(express_session_1.default(sessionSettings_1.default));
    app.use(config_1.default.api.prefix, controllers_1.default());
    app.use(express_1.default());
    app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
    //   / catch 404 and forward to error handler
    // app.use((req, res, next) => {
    //     const err = new Error('Not Found');
    //     err['status'] = 404;
    //     next(err);
    // });
    return app;
};
//# sourceMappingURL=express.js.map