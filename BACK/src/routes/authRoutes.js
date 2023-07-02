import express from 'express';
const router = express.Router();
import {signUp, logIn, signOut, whoAmI} from '../controllers/authControllers.js'

router.get('/whoami', whoAmI);
router.post('/signup', signUp);
router.post('/login', logIn);
router.post('/signout', signOut);

export default router;