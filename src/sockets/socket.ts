import checkJWT  from "../helpers/check.helper";
const {io} = require('../app');
import {userConnected, userDisconnected} from "../controllers/socket.controller"
import payload from "Payload";

// Socket Messages
io.on('connection',(client: any) => {
    console.log('Client connected');


    console.log(client.handshake.headers['x-token']);
    //console.log(client.handshake.headers);
    const[valid, uid] = checkJWT(client.handshake.headers['x-token']);
    
    // Verificar autenticacion
    if(!valid) return client.disconnect();
    
    // Cliente autenticado
    userConnected(uid)

    // Ingresar al usuario a una sala especifica
    // Sala Global, client.id
    client.join(uid);

    // Escuchar del cliente el mensaje personal
    client.on('personal-message', (payload: any) => {
        console.log(payload);
        
    })
    

    client.on('disconnect', () => {
        console.log('Client disconnected');
        userDisconnected(uid);
    });
});
