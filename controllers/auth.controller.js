// Third party imports
const {response, request} = require("express");
const bcrypt = require("bcryptjs");
// Third party imports

// Local imports
const User = require('../models/user.model');
const { generateJWT } = require("../helpers/jwt.helper");
// Local Imports

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
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Check logs'
        })
    }

}

// Export Modules
module.exports = {
    createUser
}
// Export Modules