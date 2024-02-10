const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes'); // Assuming routes.js is in the same directory

// // Redirect HTTP to HTTPS
// app.use((req, res, next) => {
//     if (req.secure) {
//       next();
//     } else {
//       const host = req.headers.host.replace(/:\d+$/, ''); // Remove port number if present
//       res.redirect(`https://${host}${req.url}`);
//     }
//   });

// Configure CORS for a specific domain
// app.use(cors({
//     origin: 'https://ruthprudence.com/rg'
// }));

app.use(cors());




// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Use the routes
app.use(routes);

// Route to serve the React application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8011;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.set('trust proxy', true);


module.exports = app;
