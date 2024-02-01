const express = require('express');
const path = require('path');
const { createDatabaseConnection, closeDatabaseConnection } = require('./database');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// POST endpoint to handle bug report submissions
app.post('/api/bug-report', async (req, res) => {
    try {
        const db = await createDatabaseConnection();
        const { description, stepsToReproduce, contactEmail } = req.body;

        await db.beginTransaction();
        try {
            // Update the query to insert data into a bug reports table
            const bugReportQuery = 'INSERT INTO BugReports (description, stepsToReproduce, contactEmail) VALUES (?, ?, ?)';
            await db.query(bugReportQuery, [description, stepsToReproduce, contactEmail]);

            await db.commit();
            res.send('Bug report submitted successfully');
        } catch (error) {
            await db.rollback();
            console.error('Error during database transaction:', error);
            res.status(500).send('Error processing request');
        } finally {
            await closeDatabaseConnection(db);
        }
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
