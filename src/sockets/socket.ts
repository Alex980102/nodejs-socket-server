import checkJWT  from "../helpers/check.helper";
const {io} = require('../app');

// Socket Messages
io.on('connection', (client: any) => {
    console.log('Client connected');


    /* console.log(client.handshake.headers['x-token']); */
/*     console.log(client.handshake.headers);
    const[valid, uid] = checkJWT(client.handshake.headers['x-token']);
    
    if(!valid) return client.disconnect();
    
    console.log('Cliente autenticado'); */
    

    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
