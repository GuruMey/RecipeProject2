import express from 'express';
import {
    createRecipe,
    saveRecipe,
    publishRecipe,
    editRecipe,
    deleteRecipe,
    getAllRecipes,
    getRecipe
} from "../controllers/recipeController.js";
import {authenticateUser, authorizeUser} from "../middleware/authentication.js";
const router = express.Router();

router.get('/', getAllRecipes);
router.get('/getRecipe/:recipeId', getRecipe);
router.post('/createRecipe/:recipeId', authenticateUser, authorizeUser, createRecipe);
router.post('/saveRecipe/:recipeId', authenticateUser, authorizeUser,  saveRecipe);
router.post('publishRecipe/:recipeId', authenticateUser, authorizeUser,  publishRecipe);
router.put('/editRecipe/:recipeId', authenticateUser, authorizeUser,  editRecipe);
router.delete('/deleteRecipe/:userId', authenticateUser, authorizeUser,  deleteRecipe);


export default router;