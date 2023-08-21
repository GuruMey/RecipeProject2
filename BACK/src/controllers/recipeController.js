import RecipeModel from "../models/RecipeModel.js";
import Joi from "joi";

const getAllRecipes = async (req, res, next) => {
    try {
        const pageSize = 8;

        const page = parseInt(req.query.page || "1");

        const search = decodeURIComponent(req.query.search || "");

        const userId = req.query.userId || "";

        const favorites = req.query.favorites === "true";

        const query = {
            published: true
        }

        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        if (!favorites && userId) {
            query.createdBy = userId;
            delete query.published;
        }

        if (favorites && userId) {
            query.likedBy = userId;
        }

        const nPages = Math.ceil(await RecipeModel.countDocuments(query) / pageSize) || 1;

        if (page < 1) {
            return res.status(400).json({
                status: "error",
                error: "Invalid page number"
            });
        }

        const recipes = await RecipeModel.find(query).limit(pageSize).skip((page - 1) * pageSize).sort({createdAt: -1});

        return res.status(200).json({
            status: "success",
            data: {
                recipes,
                nPages
            }
        });
    } catch(error) {
        next(error);
    }
};

const getRecipe = async (req, res, next) => {
    const recipeId = req.params.recipeId;

    try {
        const recipe = await RecipeModel.findById(recipeId);
        return res.status(200).json({data: recipe});
    } catch(error) {
        next(error);
    }
}

const createRecipe = async (req, res) => {
    const schema = Joi.object({
        title: Joi.string().min(1).max(100).required(),
        description: Joi.string().max(300).optional().allow(''),
        time: Joi.number().required(),
        coverPhoto: Joi.string().optional().allow(''),
        ingredients: Joi.array().items(Joi.string().max(300)).required(),
        steps: Joi.array().items(Joi.string().max(300)).required(),
        tags: Joi.array().items(Joi.string().max(300)).required(),
    })

    const validation = schema.validate(req.body);

    if (validation.error) {
        return res.status(400).json({
            status: "error",
            error: validation.error
        });
    }

    try {
        const existingRecipe = await RecipeModel.findOne({ title: req.body.title });

        if (existingRecipe) {
            return res.status(409).json({error: 'You already have created a recipe with this title'});
        }

        const newRecipe = await RecipeModel.create({
            createdBy: req.user.id,
            title: req.body.title,
            description: req.body.description,
            time: req.body.time,
            ingredients: req.body.ingredients,
            steps: req.body.steps,
            tags: req.body.tags,
            published: false,
            createdAt: new Date(),
            coverPhoto: req.body.coverPhoto,
        });

        return res.status(200).json({
            status: "success",
            message:'Recipe has been created successfully',
            data: {
                id: newRecipe._id,
            }
        });

    } catch(error) {
        console.error(" An error has occurred during the recipe creation process :", error);
        res.status(500).json({ message: "An error has occurred during the recipe creation process" });
    }
}

const publishRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;
    const published = req.body.published;

    if (typeof published !== "boolean") {
        return res.status(400).json({ message: "Published must be a boolean" });
    }

    try {
        const existingRecipe = await RecipeModel.findById(recipeId);

        if (!existingRecipe) {
            return res.status(404).json({ message: "Cannot find recipe" });
        }

        await RecipeModel.findByIdAndUpdate(recipeId, { published: published });

        res.status(200).json({ message: "Recipe published successfully" });
    } catch (error) {
        console.error("An error has occurred while publishing the recipe:", error);
        res.status(500).json({ message: "An error has occurred while publishing the recipe" });
    }
};


const likeRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;
    const liked = req.body.liked;
    const userId = req.body.userId;

    if (typeof liked !== "boolean") {
        return res.status(400).json({ message: "Liked must be a boolean" });
    }

    try {
        const existingRecipe = await RecipeModel.findById(recipeId);

        if (!existingRecipe) {
            return res.status(404).json({ message: "Cannot find recipe" });
        }

        if (liked) {
            await RecipeModel.findByIdAndUpdate(recipeId, { $addToSet: { likedBy: userId } });
        } else {
            await RecipeModel.findByIdAndUpdate(recipeId, { $pull: { likedBy: userId } });
        }

        res.status(200).json({ message: "Recipe published successfully" });
    } catch (error) {
        console.error("An error has occurred while publishing the recipe:", error);
        res.status(500).json({ message: "An error has occurred while publishing the recipe" });
    }
};

const editRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;

    const schema = Joi.object({
        title: Joi.string().min(1).max(100).required(),
        description: Joi.string().max(300).optional().allow(''),
        time: Joi.number().required(),
        coverPhoto: Joi.string().optional().allow(''),
        ingredients: Joi.array().items(Joi.string().max(300)).required(),
        steps: Joi.array().items(Joi.string().max(300)).required(),
        tags: Joi.array().items(Joi.string().max(300)).required(),
    })

    const validation = schema.validate(req.body);

    if (validation.error) {
        return res.status(400).json({
            status: "error",
            error: validation.error
        });
    }

    try {
        const updatedRecipe = await RecipeModel.updateOne({
            _id: recipeId,
            createdBy: req.user.id
        }, {
            ...req.body,
        });

        res.status(200).json({ message: "Recipe updated successfully", recipe: updatedRecipe });
    } catch (error) {
        console.error("An error has occurred while editing recipe :", error);
        res.status(500).json({ message: "An error has occurred while editing recipe" });
    }
};

const deleteRecipe = async (req, res) => {
    const RecipeId = req.params.recipeId;

    try {
        const existingRecipe = await RecipeModel.findOne({
            _id: RecipeId,
            createdBy: req.user.id
        });

        if (!existingRecipe) {
            return res.status(404).json({ message: "Cannot find recipe" });
        }

        await RecipeModel.findByIdAndRemove(RecipeId);

        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error in recipe deletion" });
    }
};

export {getAllRecipes, getRecipe ,createRecipe, publishRecipe, editRecipe, likeRecipe, deleteRecipe};
