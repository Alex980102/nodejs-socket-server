import {Router, response} from 'express';
import {check} from 'express-validator';
import { MinMaxOptions } from 'express-validator/src/options';

import validateFields from '../middlewares/validate-fields.middleware';
import validateJWT from '../middlewares/validate-jwt.middleware';

import createUser from '../controllers/auth.controller.createUser';
import logIn from '../controllers/auth.controller.login'
import renewToken from '../controllers/auth.controller.renewToken';

// Const and variable declarations
const router = Router();
// Const and variable declarations

// Router create new user
router.post('/new', [
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'Email is required and most be a valid email').notEmpty().isEmail(),
    check('password', 'Password cant be empty and most be more or equal than 6 characters').notEmpty().isLength({min: 6}),
    validateFields,
],createUser);

// Login
router.post('/', [
    check('email', 'Email is required and most be a valid email').notEmpty().isEmail(),
    check('password', 'Password cant be empty and most be more or equal than 6 characters').notEmpty().isLength({min: 6}),
    validateFields
],logIn)

// Renew Token
router.get('/renew', validateJWT,renewToken);

export default router;

