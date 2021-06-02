/*
    path: api/login
*/

// Third party imports
const {Router, response} = require('express');
const { check } = require('express-validator');
// Third party imports

// Local imports
const {createUser} = require('../controllers/auth.controller');
const { validateFields } = require('../middlewares/validate-fields.middleware');
// Local imports

// Const and variable declarations
const router = Router();
// Const and variable declarations

router.post('/new', [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'Email is required and most be a valid email').notEmpty().isEmail(),
    check('password', 'Password cant be empty and most be more or equal than 6 characters').notEmpty().isLength(6),
    validateFields,
],createUser);

// Export Modules
module.exports = router;
// Export Modules