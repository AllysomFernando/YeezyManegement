import { Sequelize } from 'sequelize';

let MYSQL_DB = 'dbyeezy';
let MYSQL_USER = 'root';
let MYSQL_PASSWORD = '12345678';
let MYSQL_PORT = 3332

export const componentSequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD,{
    dialect: 'mysql',
    host: '127.0.0.1',
    port: MYSQL_PORT
});