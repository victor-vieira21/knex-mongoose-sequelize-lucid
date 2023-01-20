import knex from 'knex';
import dotenv from 'dotenv';
import mysql2 from 'mysql2'

dotenv.config();


const connection = {
  client: 'mysql2',
  connection: {
    host : process.env.MYSQL_HOST as string,
    port : process.env.MYSQL_PORT as string,
   // port : 25060,
    user : process.env.MYSQL_USER as string,
    password : process.env.MYSQL_PASSWORD as string,
    database : process.env.MYSQL_DB_KNEX as string,
  }
}

export const knexConnection = knex(connection);