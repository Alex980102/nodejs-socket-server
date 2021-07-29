import User from '../models/user.model';
import {request, response} from 'express';
import bcrypt from 'bcryptjs';
import generateJWT from '../helpers/jwt.helper'

const logIn = async(req = request, res = response) => {

    const {email, password} = req.body;
    
    try {

        // Validate if email exist
        const userDB = await User.findOne({email});
        if(!userDB){
            return res.status(404).json({
                ok: false,
                msg: 'Credentials are incorrect try again with valid credentials'
            });
        }
        // Validate if email exist

        // Valid Password
        const validPassword = bcrypt.compareSync(password, userDB.password);
        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Credentials are incorrect try again with valid credentials'
            });
        }
        // Valid Password

        const token = await generateJWT(userDB.id);

        res.json({
            ok: true,
            user: userDB,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Check logs'
        });
    }

};

export default logIn;