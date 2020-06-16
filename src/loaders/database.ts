import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.SQLDATABASE, process.env.SQLUSERNAME, process.env.SQLPASSWORD, {
    host: process.env.SQLHOST,
    port: parseInt(process.env.SQLPORT),
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate();
sequelize.sync();

export default sequelize;