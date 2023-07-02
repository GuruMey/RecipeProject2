import express from "express";
import {getAllFavorites,addToFavorites, removeFromFavorites} from '../controllers/favoriteControllers.js';
import {authenticateUser, authorizeUser} from "../middleware/authentication.js";

const router = express.Router();

router.get('/', authenticateUser, authorizeUser, getAllFavorites);
router.post('/addFavorite/:recipeId', authenticateUser, authorizeUser, addToFavorites);
router.delete('/deleteFavorite/:recipeId',authenticateUser ,authorizeUser, removeFromFavorites);

export default router;