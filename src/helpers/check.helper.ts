
import payload from '../types/Payload';
import jwt from 'jsonwebtoken';

const checkJWT = (token: string):[boolean, string | null] => {
    try {
        const payload: payload | any = jwt.verify(token, process.env.JWT_KEY);
        return[true, payload.uid]
    } catch (error) {
        
        return [false, null]
    }
}

export default checkJWT;