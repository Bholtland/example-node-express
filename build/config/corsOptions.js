"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const domainWhitelist_1 = __importDefault(require("./domainWhitelist"));
exports.default = {
    origin: function (origin, callback) {
        const originIsWhitelisted = domainWhitelist_1.default.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
//# sourceMappingURL=corsOptions.js.map