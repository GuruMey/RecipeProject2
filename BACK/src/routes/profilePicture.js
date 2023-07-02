import express from 'express';
const router = express.Router();
import { addProfilePicture, getProfilePictureByUser, updateProfilePicture, deleteProfilePicture } from '../controllers/profilePictureController.js';
import { authenticateUser } from "../middleware/authentication.js";

router.post('/profilePictures', authenticateUser, addProfilePicture);
router.get('/profilePictures/:userId', getProfilePictureByUser);
router.put('/profilePictures/:userId', authenticateUser, updateProfilePicture);
router.delete('/profilePictures/:userId', authenticateUser, deleteProfilePicture);

export default router;
