import FavoritesModel from "../models/FavoritesModel.js";

// //----------------- GET ALL FAVORITES ----------------- //

const getAllFavorites = async (req, res, next) => {
    try {
        const favorites = await FavoritesModel.find();
        return res.status(200).json({data: favorites});
    } catch (error) {
        next(error);
    }
};
// //----------------- ADD TO FAVORITES ----------------- //

const addToFavorites = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const recipeId = req.params.recipeId;

        const favorite = new FavoritesModel({
            userId: userId,
            recipeId: recipeId
        });

        await favorite.save();

        return res.status(200).json({ message: "Added to favorites" });
    } catch (error) {
        next(error);
    }
};

// //----------------- REMOVE FROM FAVORITES ----------------- //

const removeFromFavorites = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const recipeId = req.params.recipeId;

        await FavoritesModel.findOneAndDelete({ userId: userId, recipeId: recipeId });

        return res.status(200).json({ message: "Removed from favorites" });
    } catch (error) {
        next(error);
    }
};

export { getAllFavorites, addToFavorites, removeFromFavorites }
