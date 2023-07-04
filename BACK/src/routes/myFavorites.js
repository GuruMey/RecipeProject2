import express from "express";
import {getAllFavorites,addToFavorites, removeFromFavorites} from '../controllers/favoriteControllers.js';
import {authenticateUser, authorizeRoles} from "../middleware/authentication.js";

const router = express.Router();

router.get('/', authenticateUser, authorizeRoles, getAllFavorites);
router.post('/addFavorite/:recipeId', authenticateUser, authorizeRoles, addToFavorites);
router.delete('/deleteFavorite/:recipeId',authenticateUser ,authorizeRoles, removeFromFavorites);

export default router;