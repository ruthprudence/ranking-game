const express = require('express');
const path = require('path');
const { createDatabaseConnection, closeDatabaseConnection } = require('./database');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// POST endpoint to handle bug report submissions
// POST endpoint to handle bug report submissions
app.post('/api/bug-report', async (req, res) => {
    try {
        const db = await createDatabaseConnection();
        const { description, stepsToReproduce, contactEmail } = req.body;

        await db.beginTransaction();
        try {
            const bugReportQuery = 'INSERT INTO BugReports (description, stepsToReproduce, contactEmail) VALUES (?, ?, ?)';
            await db.query(bugReportQuery, [description, stepsToReproduce, contactEmail]);

            await db.commit();
            res.json({ message: 'Bug report submitted successfully' }); // Updated to send JSON response
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

app.get('/test', (req, res) => {
    res.json({ message: "Server is working" });
});

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3002' // Adjust if your frontend port changes
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
