import express from 'express';
const router = express.Router();
import {newRating, getRatingsByRecipe} from '../controllers/ratingController.js';
import {authenticateUser} from "../middleware/authentication.js";

router.post('/ratings', authenticateUser,newRating);
router.get('/ratings/:recipeId', getRatingsByRecipe);


export default router;