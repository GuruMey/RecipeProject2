import express from 'express';
import {
    createRecipe,
    publishRecipe,
    editRecipe,
    deleteRecipe,
    getAllRecipes,
    getRecipe, likeRecipe
} from "../controllers/recipeController.js";
import {authenticateUser} from "../middleware/authentication.js";
const router = express.Router();

router.get('/', getAllRecipes);
router.get('/getRecipe/:recipeId', getRecipe);
router.post('/', authenticateUser, createRecipe);
router.patch('/publish/:recipeId', authenticateUser,  publishRecipe);
router.patch('/like/:recipeId', authenticateUser,  likeRecipe);
router.put('/editRecipe/:recipeId', authenticateUser,  editRecipe);
router.delete('/:recipeId', authenticateUser,  deleteRecipe);

export default router;