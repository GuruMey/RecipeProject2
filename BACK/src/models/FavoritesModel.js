import mongoose from "mongoose";
const {Schema, model} = mongoose;

const FavoritesSchema = new Schema ({
    recipeId:String,
    userId:String,
});

const FavoritesModel = model('favorites', FavoritesSchema);

export default FavoritesModel;