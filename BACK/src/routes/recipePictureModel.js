import express from 'express';
const router = express.Router();
import { addRecipePicture, getRecipePictureByRecipe, updateRecipePicture, deleteRecipePicture } from '../controllers/profilePictureController.js';

router.post('/recipePictures', addRecipePicture);
router.get('/recipePictures/:recipeId', getRecipePictureByRecipe);
router.put('/recipePictures/:recipeId', updateRecipePicture);
router.delete('/recipePictures/:recipeId', deleteRecipePicture);

export default router;
