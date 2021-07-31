/*
    path: api/users
 */

import {Router} from "express";
import {check} from 'express-validator';
import validateJWT from "../middlewares/validate-jwt.middleware"
import { getUsers } from '../controllers/users.controller';

const router = Router();

router.get('/', validateJWT, getUsers)

export default router;