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
const router = express.Router();

router.get('/', getAllRecipes);
router.get('/getRecipe/:recipeId', getRecipe);
router.post('/createRecipe/:recipeId', createRecipe);
router.post('/saveRecipe/:recipeId', saveRecipe);
router.post('publishRecipe/:recipeId', publishRecipe);
router.put('/editRecipe/:recipeId', editRecipe);
router.delete('/deleteRecipe/:userId', deleteRecipe);


export default router;