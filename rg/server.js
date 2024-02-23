const express = require('express');
const { createDatabaseConnection, closeDatabaseConnection } = require('./database');
const app = express();
const cors = require('cors');
const path = require('path');

// CORS configuration
const corsOptions = {
  origin: 'https://rg.ruthprudence.com', // Updated origin
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// JSON parser middleware
app.use(express.json());

// HTTPS redirection middleware
app.use((req, res, next) => {
  if (!req.secure && req.get('X-Forwarded-Proto') !== 'https') {
    const host = req.get('Host');
    res.redirect(`https://${host}${req.url}`);
  } else {
    next();
  }
});

// Static file serving
app.use(express.static(path.join(__dirname, 'build')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Database error handling
const handleDatabaseError = (error, res) => {
  console.error('Database error:', error);
  res.status(500).send('Internal Server Error');
};

// Include the router file for bug report and test endpoints
const routes = require('./routes'); // Ensure this points to the correct routes file
app.use(routes);

// Catch-all route for serving React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 443; // Standard HTTPS port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.set('trust proxy', true);

module.exports = app;
