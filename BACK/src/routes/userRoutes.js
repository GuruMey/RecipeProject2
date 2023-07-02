import express from 'express';
import {deleteUser, editUser, getAllUsers, getUserById, createUser} from "../controllers/userController.js";
const router = express.Router();
import {authenticateUser, authorizeUser} from "../middleware/authentication.js";


router.post('/createUser',authenticateUser, authorizeUser(['admin']), createUser);
router.get('/getAllUsers', authenticateUser, authorizeUser(['admin']), getAllUsers);
router.get('/getUserById/:userId', authenticateUser, authorizeUser(['admin']), getUserById);
router.put('/editUser/:userId', authenticateUser, authorizeUser,  editUser);
router.delete('/deleteUser/:userId', authenticateUser, authorizeUser, deleteUser);



export default router;