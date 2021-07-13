// Third party imports
const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
// Third party imports

// Local Imports
const {dbConnection} = require('./database/config');


// DB Configuration
dbConnection();


// Express App
const app = express();


// CORS Configuration
app.use(cors());

// Reading and parsing the body
app.use(express.json());

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