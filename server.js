// Import dependencies
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Create a new express application called 'app'
const app = express();

// Set our backend port to be either an environment variable or port 3000
const port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'))

// This application level middleware prints incoming requests to the servers console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Set up the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Set up the CORS middleware
app.use(cors());

// Set up Web routes
const routes = require('./routes/routes');
app.use(routes);

// Set our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));