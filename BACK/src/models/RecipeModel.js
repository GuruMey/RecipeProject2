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
    published: Boolean
});

const RecipeModel = model('recipe', RecipeSchema);

export default RecipeModel;
