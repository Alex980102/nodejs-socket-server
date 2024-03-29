// Third party imports
const express = require('express');
const path = require('path');
require('dotenv').config();
// Third party imports

// Local Imports
const {dbConnection} = require('./database/config');
// Local Imports


// DB Configuration
dbConnection();
// DB Configuration

// Express App
const app = express();
// Express App

// Reading and parsing the body
app.use(express.json());
// Reading and parsing the body

// Node Socket Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');
// Node Socket Server

// Public Path
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));
// Public Path

// Routes
app.use('/api/login', require('./routes/auth.routes'));
// Routes

server.listen(process.env.PORT, (err) => {
    if(err) throw new Error(err);
    console.log('Server run on port', process.env.PORT);
});