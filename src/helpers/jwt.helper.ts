import jwt from 'jsonwebtoken';
import Payload from 'Payload';

const generateJWT = (uid: Payload) => {
    
    return new Promise((resolve, reject) => {
        const payload = {uid};

        jwt.sign(
            payload,
            process.env.JWT_KEY,{
                expiresIn: '48h'
            }, (err, token) => {
                if(err){
                    console.log('err');
                    reject('could not generate the json web token');
                }else{
                    resolve(token);
                }
            });
    });
};

export default generateJWT;