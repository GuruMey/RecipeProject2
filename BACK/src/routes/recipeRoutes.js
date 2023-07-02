import express from 'express';
import {createRecipe, saveRecipe, publishRecipe, editRecipe, deleteRecipe } from "../controllers/recipeController.js";
const router = express.Router();

router.post('/createRecipe/:recipeId', createRecipe);
router.post('/saveRecipe/:recipeId', saveRecipe);
router.post('publishRecipe/:recipeId', publishRecipe);
router.put('/editRecipe/:recipeId', editRecipe);
router.delete('/deleteRecipe/:userId', deleteRecipe);


export default router;