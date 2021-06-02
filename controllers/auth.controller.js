// Third party imports
const {response, request} = require("express");
const {validationResult} = require("express-validator");
// Third party imports


const createUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'User Created!!'
    });
}

// Export Modules
module.exports = {
    createUser
}
// Export Modules