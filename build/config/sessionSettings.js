"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mySQLStore = require('express-mysql-session')(session);
const dbconnection_1 = __importDefault(require("./dbconnection"));
const sessionStoreOptions = {
    host: dbconnection_1.default.host,
    port: 3306,
    user: dbconnection_1.default.user,
    password: dbconnection_1.default.password,
    database: dbconnection_1.default.database,
    clearExpired: true,
    checkExpirationInterval: 900000
};
// const sessionStore = new mySQLStore(sessionStoreOptions);
// sessionStore.on('error', function(error) {
//     console.log(error);
// });
exports.default = {
    key: 'pleaseJohnPleaseComeHome',
    secret: 'theLetterThatJohnnyWalkerRead',
    // genid: function(){
    //     return uuid()
    // },
    resave: false,
    proxy: true,
    rolling: true,
    saveUninitialized: false,
    // store: sessionStore,
    cookie: {
        httpOnly: true,
        secure: false,
        // domain: whitelist,
        maxAge: 86400000
    }
};
//# sourceMappingURL=sessionSettings.js.map