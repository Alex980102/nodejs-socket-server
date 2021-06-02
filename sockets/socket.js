const {io} = require('../index');

// Socket Messages
io.on('connection', client => {
    console.log('Client connected');

    client.on('disconnected', () => {
        console.log('Client disconnected');
    });
});
// Socket Messages