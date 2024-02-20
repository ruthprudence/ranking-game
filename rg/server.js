const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes'); // Ensure routes.js is correctly set up

// Middleware to Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (!req.secure && req.get('X-Forwarded-Proto') !== 'https') {
    const host = req.get('Host');
    return res.redirect(`https://${host}${req.url}`);
  }
  next();
});

// CORS Configuration
// Uncomment and customize this if you need to restrict the API to specific domains
// app.use(cors({
//   origin: 'https://ruthprudence.com/rg'
// }));
app.use(cors());

// Parse JSON payloads
app.use(express.json());

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve assets from the public directory
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Use defined routes for the application
app.use(routes);

// Route to serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on the specified PORT
const PORT = process.env.PORT || 8011;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Trust proxy for secure cookies and session handling
app.set('trust proxy', true);

module.exports = app;
