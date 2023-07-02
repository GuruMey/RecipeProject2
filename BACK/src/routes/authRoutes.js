import express from 'express';
const router = express.Router();
import {signUp, signIn, signOut} from '../controllers/authControllers.js'

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signOut);



export default router;