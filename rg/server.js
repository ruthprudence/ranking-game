const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes'); // Import the routes

const app = express();

// Enable CORS for your frontend origin
app.use(cors({
    origin: 'http://localhost:3001' // Adjust if your frontend port changes
}));

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
