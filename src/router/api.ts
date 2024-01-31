import { Router } from 'express';
import {Auth} from '../middleware/auth'
import * as ApiController from '../controller/apiController';

const router = Router()

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);
router.get('/list',Auth.private, ApiController.list);

export default router;