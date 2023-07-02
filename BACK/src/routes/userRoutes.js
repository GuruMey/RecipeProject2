import express from 'express';
import {deleteUser, editUser} from "../controllers/userController.js";
const router = express.Router();

router.put('/editUser/:userId', editUser);
router.delete('/deleteUser/:userId', deleteUser);

console.log("Je suis le 3e console.log de userRoutes.js")

export default router;