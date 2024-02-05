// routes.js
const express = require('express');
const { createDatabaseConnection, closeDatabaseConnection } = require('./database');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST endpoint to handle bug report submissions
router.post('/api/bug-report', 
  [
    body('description').trim().escape(),
    body('stepsToReproduce').trim().escape(),
    body('contactEmail').trim() // Relaxing email validation
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation Errors:', errors.array()); // Logging validation errors
      return res.status(400).json({ errors: errors.array() });
    }
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
    console.log(errors.array)
  }
);

   
});

// Test endpoint
router.get('/test', (req, res) => {
    res.json({ message: "Server is working" });
});

module.exports = router;
