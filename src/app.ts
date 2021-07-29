import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import auth from './routes/auth.routes'

import dbConnection from './database/config';

dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use('/api/login', auth);

server.listen(process.env.PORT, (err: string) => {
    if(err) throw new Error(err);
    console.log('Corriendo en puerto 3000');
});
