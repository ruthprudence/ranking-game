const express = require('express');
const app = express();
const port = 3000; //any avaiable port on my system

// Define a route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});