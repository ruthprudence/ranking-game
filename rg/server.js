const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes'); // Assuming routes.js is in the same directory



// Configure CORS for a specific domain
// app.use(cors({
//     origin: 'https://ruthprudence.com/rg'
// }));

app.use(cors());




// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// Use the routes
app.use(routes);

// Route to serve the React application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
