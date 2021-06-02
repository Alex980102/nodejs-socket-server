/*
    path: api/login
*/

// Third party imports
const {Router, response} = require('express');
const { check } = require('express-validator');
// Third party imports

// Local imports
const {createUser} = require('../controllers/auth.controller');
// Local imports

// Const and variable declarations
const router = Router();
// Const and variable declarations

router.post('/new', [
    check('name', 'The name is required').not().isEmpty(),
],createUser);

// Export Modules
module.exports = router;
// Export Modules