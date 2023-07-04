import RecipeModel from "../models/RecipeModel.js";



// //----------------- GET ALL RECIPES ----------------- //
const getAllRecipes = async (req, res, next) => {
    try {
        const recipes = await RecipeModel.find();
        return res.status(200).json({data: recipes});
    } catch(error) {
        next(error);
    }
};

// //----------------- GET RECIPE ----------------- //

const getRecipe = async (req, res, next) => {
    const recipeId = req.params.recipeId;

    try {
        const recipe = await RecipeModel.findById(recipeId);
        return res.status(200).json({data: recipe});
    } catch(error) {
        next(error);
    }
}

//----------------- CREATE RECIPE ----------------- //
const createRecipe = async (req, res) => {
    console.log(req.body)
    const receivedTitle = req.body.title;
    const receivedDescription = req.body.description;
    const receivedPreparationTime = req.body.preparationTime;
    const receivedIngredients = req.body.ingredients;
    const receivedSteps = req.body.steps;
    const receivedTags = req.body.tags;

    if (!receivedTitle || !receivedDescription || !receivedPreparationTime || !receivedIngredients || !receivedSteps || !receivedTags) {
        return res.status(400).json({error: 'Missing required fields'});
    }

    try {
        const existingRecipe = await RecipeModel.findOne({ title: receivedTitle });

        if (existingRecipe) {
            return res.status(409).json({error: 'You already have created a recipe with this title'});
        }

        const newRecipe = await RecipeModel.create({
            title: receivedTitle,
            description: receivedDescription,
            preparationTime: receivedPreparationTime,
            ingredients: receivedIngredients,
            steps: receivedSteps,
            tags: receivedTags,
            published: false,
            saved: false,
            createdAt: new Date(),
        });

        return res.status(200).json({message:'Recipe has been created successfully', newRecipe});

    } catch(error) {
        console.error(" An error has occurred during the recipe creation process :", error);
        res.status(500).json({ message: "An error has occurred during the recipe creation process" });
    }
}


//----------------- SAVE RECIPE ----------------- //
const saveRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;

    try {
        const existingRecipe = await RecipeModel.findById(recipeId);

        if (!existingRecipe) {
            return res.status(404).json({ message: "Cannot find recipe" });
        }

        existingRecipe.saved = true;
        existingRecipe.published = false;
        await existingRecipe.save();

        res.status(200).json({ message: "Recipe saved successfully" });
    } catch (error) {
        console.error("An error has occurred while saving the recipe:", error);
        res.status(500).json({ message: "An error has occurred while saving the recipe" });
    }
};

//----------------- PUBLISH RECIPE ----------------- //
const publishRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;

    try {
        const existingRecipe = await RecipeModel.findById(recipeId);

        if (!existingRecipe) {
            return res.status(404).json({ message: "Cannot find recipe" });
        }

        existingRecipe.saved = true;
        existingRecipe.published = true;
        await existingRecipe.save();

        res.status(200).json({ message: "Recipe saved and published successfully" });
    } catch (error) {
        console.error("An error has occurred while publishing the recipe:", error);
        res.status(500).json({ message: "An error has occurred while publishing the recipe" });
    }
};



//----------------- EDIT RECIPE ----------------- //
const editRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;
    const fieldValuesToUpdate = req.body;

    try {
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(recipeId, fieldValuesToUpdate, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Cannot find recipe" });
        }

        res.status(200).json({ message: "Recipe updated successfully", recipe: updatedRecipe });
    } catch (error) {
        console.error("An error has occurred while editing recipe :", error);
        res.status(500).json({ message: "An error has occurred while editing recipe" });
    }
};


//----------------- DELETE RECIPE ----------------- //
const deleteRecipe = async (req, res) => {
    const RecipeId = req.params.recipeId;

    try {
        const existingRecipe = await RecipeModel.findByIdAndRemove(RecipeId);

        if (!existingRecipe) {
            return res.status(404).json({ message: "Cannot find recipe" });
        }

        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error in recipe deletion" });
    }
};

export {getAllRecipes, getRecipe ,createRecipe, saveRecipe, publishRecipe, editRecipe, deleteRecipe};
