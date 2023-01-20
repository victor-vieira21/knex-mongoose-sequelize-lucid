import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import mysql2 from 'mysql2'

dotenv.config();

export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect: 'mysql',
        dialectModule: mysql2,
        port: parseInt(process.env.MYSQL_PORT as string)
    }

);