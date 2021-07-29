import payload from '../types/Payload';
import jwt from 'jsonwebtoken'; 

const validateJWT = (req: any, res: any, next: any) => {

    // Read Token
    const token = req.header('x-token');
    if (!token){
        return res.status(401).json({
            ok: false,
            msg: 'You do not have a token on the header request'
        });
    };

    try {
        const payload: payload | any = jwt.verify(token, process.env.JWT_KEY);
        req.uid = payload.uid;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'The token is not valid'
        });
    }
};

export default validateJWT;