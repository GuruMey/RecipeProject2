import express from 'express';
const router = express.Router();
import {signUp, logIn, signOut} from '../controllers/authControllers.js'

router.get('/whoami', );
router.post('/signup', signUp);
router.post('/login', logIn);
router.post('/signout', signOut);

export default router;