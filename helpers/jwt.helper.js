const jwt = require('jsonwebtoken');

const generateJWT = (uid) => {

    return new Promise((resolve, reject) => {
        const payload = {uid};

        jwt.sign(payload, process.env.JWT_KEY, {
            // TODO: change token lifetime to 12h
            expiresIn: '48h'
        }, (err, token)=>{
            if(err){
                console.log('err')
                reject('could not generate the json web token');
            }else{
                resolve(token);
            }
        });
    });

}

module.exports = {
    generateJWT
}