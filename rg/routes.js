// routes.js
const express = require('express');
const { createDatabaseConnection, closeDatabaseConnection } = require('./database');
const router = express.Router();

// POST endpoint to handle bug report submissions
router.post('/api/bug-report', async (req, res) => {
    try {
        const db = await createDatabaseConnection();
        const { description, stepsToReproduce, contactEmail } = req.body;

        await db.beginTransaction();
        try {
            const bugReportQuery = 'INSERT INTO BugReports (description, stepsToReproduce, contactEmail) VALUES (?, ?, ?)';
            await db.query(bugReportQuery, [description, stepsToReproduce, contactEmail]);

            await db.commit();
            res.json({ message: 'Bug report submitted successfully' });
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

// Test endpoint
router.get('/test', (req, res) => {
    res.json({ message: "Server is working" });
});

module.exports = router;
