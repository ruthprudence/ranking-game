const express = require('express');
const app = express();
const createDatabaseConnection = require('./database');

app.use(express.json());

app.post('/submit-data', async (req, res) => {
    try {
        const db = await createDatabaseConnection();
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



 //         res.status(500).send(error);
        //     } else {
        //         res.send('Session created successfully');
        //     }
        //         });
        //     });
        // }

//             const sessionId = sessionResults.insertId;

//             // Insert into Respondents table
//             const respondentQuery = 'INSERT INTO Respondents (session_id, username, loggedTime, ip_address) VALUES (?, ?, NOW(), ?)';
//             db.query(respondentQuery, [sessionId, username, ipAddress], (error, respondentResults) => {
//                 if (error) {
//                     return db.rollback(() => {
//                         res.status(500).send(error);
//                     });
//                 }

//                 const respondentId = respondentResults.insertId;

//                 // Handle each subject
//                 subjects.forEach(subject => {
//                     // Insert into Subjects table
//                     const subjectQuery = 'INSERT INTO Subjects (subject_name, session_id) VALUES (?, ?)';
//                     db.query(subjectQuery, [subject, sessionId], (error, subjectResults) => {
//                         if (error) {
//                             return db.rollback(() => {
//                                 res.status(500).send(error);
//                             });
//                         }

//                         const subjectId = subjectResults.insertId;

//                         // Insert into Responses table
//                         const responseQuery = 'INSERT INTO Responses (respondent_id, subject_id) VALUES (?, ?)';
//                         db.query(responseQuery, [respondentId, subjectId], (error) => {
//                             if (error) {
//                                 return db.rollback(() => {
//                                     res.status(500).send(error);
//                                 });
//                             }
//                         });
//                     });
//                 });

//                 // Commit the transaction
//                 db.commit(err => {
//                     if (err) {
//                         return db.rollback(() => {
//                             res.status(500).send(err);
//                         });
//                     }
//                     res.send('Data inserted successfully');
//                 });
//             });
//         });
//     });
// });