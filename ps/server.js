const express = require ('express');
const app = express();
const db = require('./database');

app.use(express.json());

app.post('/submit-data', (req, res) => {
    const { username, ipAddress, subjects } = req.body;

    // Start a transaction
    db.beginTransaction(err => {
        if (err) {
            return res.status(500).send(err);
        }

        // Insert into Sessions table
        const sessionQuery = 'INSERT INTO Sessions (username, loggedTime, ip_address) VALUES (?, NOW(), ?)';
        db.query(sessionQuery, [username, ipAddress], (error) => {
            if (error) {
                return db.rollback(() => {
                    res.status(500).send(error);
                });
            }

            res.send('Session created successfully');
        });
    });
});
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

app.get('/', (req, res) => {
    res.send('Hello!');
});

module.exports = app;