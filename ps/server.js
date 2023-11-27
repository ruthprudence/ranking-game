const express = require('express');
const app = express();
const {createDatabaseConnection, closeDatabaseConnection} = require('./database');

app.use(express.json());

app.post('/submit-data', async (req, res) => {
    try {
        const db = await createDatabaseConnection;
        const { username, ipAddress, subjects } = req.body;

        // Start a transaction
        db.beginTransaction(async (err) => {
            if (err) {
                return res.status(500).send(err);
            }

            try {
                // Insert into Sessions table
                const sessionQuery = 'INSERT INTO Sessions (username, loggedTime, ip_address) VALUES (?, NOW(), ?)';
                await db.query(sessionQuery, [username, ipAddress]);

                // Additional database operations for Respondents, Subjects, and Responses can go here

                // Commit the transaction
                db.commit(() => {
                    res.send('Data inserted successfully');
                });
            } catch (error) {
                // Rollback the transaction in case of an error
                db.rollback(() => {
                    res.status(500).send(error);
                });
            }
        });
    } catch (error) {
        // Handle database connection errors
        console.error('Database connection error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {
    res.send('Hello!');
});

module.exports = app;
