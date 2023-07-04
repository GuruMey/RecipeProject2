import express from 'express';
import {deleteUser, editUser, getAllUsers, getUserById, createUser} from "../controllers/userController.js";
const router = express.Router();
import {authenticateUser, authorizeRoles} from "../middleware/authentication.js";


router.post('/createUser',authenticateUser, authorizeRoles(['admin']), createUser);
router.get('/getAllUsers', authenticateUser, authorizeRoles(['admin']), getAllUsers);
router.get('/getUserById/:userId', authenticateUser, authorizeRoles(['admin']), getUserById);
router.put('/editUser/:userId', authenticateUser, authorizeRoles,  editUser);
router.delete('/deleteUser/:userId', authenticateUser, authorizeRoles, deleteUser);



export default router;