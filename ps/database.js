/**
 * apps/ps/ps/database.js
 * 
 * **/
require('dotenv').config();
const mysql2 = require('mysql2/promise');

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(error => {
    if (error) {
        console.error('Error connectiong to the database:', error);
        return;
    }
    console.log('Connected to the MySql server.');
});

module.exports = connection;