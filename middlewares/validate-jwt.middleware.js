const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {

    // Read Token
    const token = req.header('x-token');
    if (!token){
        return res.status(401).json({
            ok: false,
            msg: 'You do not have a token on the header request'
        });
    };
    // Read Token

    try {

        const {uid} = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;
        next();
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'The token is not valid'
        });
    }
};

module.exports = {
    validateJWT
}