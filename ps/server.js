const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; //any avaiable port on my system

// Define a route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Import database connection
const db = require('./database');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to receive data and insert into MySQL
app.post('/submit-data', (req, res) => {
    const data = req.body; // Data sent from the React app
    // SQL query to insert data into the database
    const query = 'INSERT INTO Responses SET ?';
    db.query(query, data, (error, results, fields) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send('Data inserted successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});