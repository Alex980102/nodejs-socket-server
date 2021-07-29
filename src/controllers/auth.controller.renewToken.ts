import User from '../models/user.model';
import {response} from 'express';
import generateJWT from '../helpers/jwt.helper'

// Renew Token
const renewToken = async(req: any, res = response) => {

    // TODO: Typed req
    const uid = req.uid;
    const token = await generateJWT(uid);
    const user = await User.findById(uid);


    res.json({
        ok: true,
        user,
        token
    });
}

export default renewToken;