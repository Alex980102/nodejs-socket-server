// Third party imports
const {response, request} = require("express");
const {validationResult} = require("express-validator");
// Third party imports


const createUser = (req = request, res = response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
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