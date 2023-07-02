import express from 'express';
import {deleteUser, editUser, addFavorite, removeFavorite, getAllUsers, getUserById, createUser} from "../controllers/userController.js";
const router = express.Router();
const {authenticateUser, authorizeUser} = require('../middleware/authentication.js');

router.post('/createUser',authenticateUser, authorizeUser(['admin']), createUser);
router.get('/getAllUsers', authenticateUser, authorizeUser(['admin']), getAllUsers);
router.get('/getUserById/:userId', authenticateUser, authorizeUser(['admin']), getUserById);
router.put('/editUser/:userId', editUser);
router.delete('/deleteUser/:userId', deleteUser);
router.put('/addFavorite/:userId/:recipeId', addFavorite);
router.put('/removeFavorite/:userId/:recipeId', removeFavorite);


export default router;