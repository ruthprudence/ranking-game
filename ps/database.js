/**
 * apps/ps/ps/database.js
 * 
 * **/
require('dotenv').config();
const mysql2 = require('mysql2/promise');

async function createDatabaseConnection() {
    try{
        const connection = await mysql2.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });

        console.log('Connected to the MySQL server.');
        return connection;
    } catch (error) {
        console.error('Error connecting to the database', error);
        throw error;
    }


    }




// connection.connect(error => {
//     if (error) {
//         console.error('Error connectiong to the database:', error);
//         return;
//     }
//     console.log('Connected to the MySql server.');
// });

module.exports = createDatabaseConnection;