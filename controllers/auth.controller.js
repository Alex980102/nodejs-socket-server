// Third party imports
const {response, request} = require("express");
const bcrypt = require("bcryptjs");
// Third party imports

// Local imports
const User = require('../models/user.model');
const { generateJWT } = require("../helpers/jwt.helper");
// Local Imports

// Create New User
const createUser = async (req = request, res = response) => {

    const {email, password} = req.body;
    
    try {   

        const emailExist = await User.findOne({email: email})
        if(emailExist){
            return res.status(400).json({
                ok: false,
                msg: 'Credentials are incorrect try again with valid credentials'
            })
        }

        const user = new User(req.body);

        // Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        // Encrypt password

        // Save user model on database
        await user.save();
        // Save user model on database

        // Generate JWT
        const token = await generateJWT(user.id);
    
        res.json({
            ok: true,
            user,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Check logs'
        })
    }

}
// Create New User

// Login
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
// Login

// Renew Token
const renewToken = async(req = request, res = response) => {

    const uid = req.uid;
    const token = await generateJWT(uid);
    const user = await User.findById(uid);


    res.json({
        ok: true,
        user,
        token
    });
}
// Renew Token

// Export Modules
module.exports = {
    createUser,
    logIn,
    renewToken
}
// Export Modules