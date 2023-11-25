require('dotenv').config();

import { createConnection } from 'mysql2';

const connection = createConnection({
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

export default connection;