import express from 'express';
import {deleteUser, editUser, getAllUsers, getUserById, createUser} from "../controllers/userController.js";
const router = express.Router();
import {authenticateUser, authorizeAdmin} from "../middleware/authentication.js";

router.get('/getAllUsers', authenticateUser, authorizeAdmin, getAllUsers);
router.delete('/deleteUser/:userId', authenticateUser, authorizeAdmin, deleteUser);

export default router;