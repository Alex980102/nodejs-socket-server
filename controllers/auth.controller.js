// Third party imports
const {response, request} = require("express");
// Third party imports

// Local imports
const User = require('../models/user.model')
// Local Imports

const createUser = async (req = request, res = response) => {
    
    const user = new User(req.body);
    await user.save();

    res.json({
        ok: true,
        body: req.body,
    });
}

// Export Modules
module.exports = {
    createUser
}
// Export Modules