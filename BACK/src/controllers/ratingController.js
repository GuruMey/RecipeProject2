import RatingModel from "../models/RatingModel.js";



// ----------------- CREATE RATING ----------------- //
 const newRating = async (req, res) => {
    const { recipeId, value } = req.body;

    if (!recipeId || !value) {
        res.status(400).json({ message: 'recipeId and value are required' });
        return;
    }

    const rating = new RatingModel({
        recipeId: recipeId,
        value: value,
        createdAt: new Date(),
    });

    try {
        const savedRating = await rating.save();
        res.status(201).json(savedRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ----------------- GET RATINGS BY RECIPE ----------------- //
 const getRatingsByRecipe = async (req, res) => {
    const { recipeId } = req.params;

    if (!recipeId) {
        res.status(400).json({ message: 'recipeId is required' });
        return;
    }

    try {
        const ratings = await RatingModel.find({ recipeId: recipeId });
        const averageRating =
            ratings.reduce((sum, rating) => sum + rating.value, 0) / ratings.length;

        res.status(200).json({ ratings, averageRating });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export {newRating, getRatingsByRecipe};
