import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import auth from './routes/auth.routes'

import dbConnection from './database/config';
import router from './routes/users.routes';
import messagesRoutes from './routes/messages.routes';

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
app.use('/api/users', router);
app.use('/api/messages', messagesRoutes);

server.listen(process.env.PORT, (err: string) => {
    if(err) throw new Error(err);
    console.log(`Corriendo en puerto ${process.env.PORT}`);
});
