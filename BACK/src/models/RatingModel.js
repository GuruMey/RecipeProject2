import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const RatingSchema = new Schema({
    recipeId: String,
    value: Number,
    createdAt: Date,
});

const RatingModel = model('rating', RatingSchema);

export default RatingModel;
