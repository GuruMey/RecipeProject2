import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const RecipePictureSchema = new Schema({
    photo: String,
    recipeId: String
});

const RecipePictureModel = model('recipePicture', RecipePictureSchema);

export default RecipePictureModel;
