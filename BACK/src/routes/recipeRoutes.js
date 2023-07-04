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
import {authenticateUser, authorizeRoles} from "../middleware/authentication.js";
const router = express.Router();

router.get('/', getAllRecipes);
router.get('/getRecipe/:recipeId', getRecipe);
router.post('/', authenticateUser, createRecipe);
router.post('publishRecipe/:recipeId', authenticateUser, authorizeRoles,  publishRecipe);
router.put('/editRecipe/:recipeId', authenticateUser, authorizeRoles,  editRecipe);
router.delete('/deleteRecipe/:userId', authenticateUser, authorizeRoles,  deleteRecipe);


export default router;