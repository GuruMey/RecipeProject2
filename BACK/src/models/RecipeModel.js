import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const RecipeSchema = new Schema({
    createdBy: String,
    title: String,
    description: String,
    time: Number,
    ingredients: [String],
    steps: [String],
    tags: [String],
    createdAt: Date,
    published: Boolean,
    likedBy: [String],
    coverPhoto: String,
});

const RecipeModel = model('recipe', RecipeSchema);

export default RecipeModel;
