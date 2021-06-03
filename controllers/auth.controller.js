// Third party imports
const {response, request} = require("express");
// Third party imports

// Local imports
const User = require('../models/user.model')
// Local Imports

const createUser = async (req = request, res = response) => {

    const {email} = req.body;
    
    try {   

        const emailExist = await User.findOne({email: email})
        if(emailExist){
            return res.status(400).json({
                ok: false,
                msg: 'Credentials are incorrect try again with valid credentials'
            })
        }

        const user = new User(req.body);
        await user.save();
    
        res.json({
            ok: true,
            user
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