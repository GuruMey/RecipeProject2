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

router.get('/', getAllRecipes); // ok
router.get('/getRecipe/:recipeId', getRecipe); // ok
router.post('/', authenticateUser, createRecipe); // ok
router.patch('/publish/:recipeId', authenticateUser,  publishRecipe); // ok
router.patch('/like/:recipeId', authenticateUser,  likeRecipe); // ok
router.put('/editRecipe/:recipeId', authenticateUser,  editRecipe);
router.delete('/:recipeId', authenticateUser,  deleteRecipe); // ok

export default router;