/**
 * Path: /api/messages
*/
import {Router} from 'express';
import { obtainChat } from '../controllers/messages.controller';
import validateJWT from '../middlewares/validate-jwt.middleware';

const messagesRoutes = Router();

messagesRoutes.get('/:from', validateJWT, obtainChat);

export default messagesRoutes;