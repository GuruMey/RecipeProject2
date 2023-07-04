import express from 'express';
const router = express.Router();
import { addRecipePicture, getRecipePictureByRecipe, updateRecipePicture, deleteRecipePicture } from '../controllers/profilePictureController.js';
import {authenticateUser, authorizeRoles} from "../middleware/authentication.js";

router.post('/recipePictures', addRecipePicture);
router.get('/recipePictures/:recipeId', getRecipePictureByRecipe);
router.put('/recipePictures/:recipeId', authenticateUser, authorizeRoles, updateRecipePicture);
router.delete('/recipePictures/:recipeId',authenticateUser, authorizeRoles,  deleteRecipePicture);

export default router;
