const express = require('express');
const app = express();
const path = require('path');
const {createDatabaseConnection, closeDatabaseConnection} = require('./database');

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

app.post('/submit-data', async (req, res) => {
    try {
        const db = await createDatabaseConnection();
        const { username, ipAddress, subjects } = req.body;

        // Start a transaction
        await db.beginTransaction();

        try {
            // Insert into Sessions table
            const sessionQuery = 'INSERT INTO Sessions (username, loggedTime, ip_address) VALUES (?, NOW(), ?)';
            await db.query(sessionQuery, [username, ipAddress]);

            // Additional database operations for Respondents, Subjects, and Responses can go here

            // Commit the transaction
            await db.commit();
            await res.send('Data inserted successfully');
        } catch (error) {
        // Handle database connection errors
        await db.rollback();
        await console.error('Database connection error:', error);
        await res.status(500).send(error);
    }
} catch (error) {
    // handle db connection errors
    console.error('Database connection error: ', error);
    await res.status(500).send('Internal Server Error');
}
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.send('Hello!');
});

module.exports = app;
