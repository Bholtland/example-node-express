import session from 'express-session';
// const mySQLStore = require('express-mysql-session')(session);
import mysqlData from './dbconnection';
import uuid from 'uuid';

const sessionStoreOptions = {
    host: mysqlData.host,
    port: 3306,
    user: mysqlData.user,
    password: mysqlData.password,
    database: mysqlData.database,
    clearExpired: true,
    checkExpirationInterval: 900000
}

// const sessionStore = new mySQLStore(sessionStoreOptions);

// sessionStore.on('error', function(error) {
//     console.log(error);
// });

export default {
    key:'pleaseJohnPleaseComeHome',
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
}
