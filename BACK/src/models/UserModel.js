import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');



const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date
    },
    profilePicture: {
        type: String,
        required: false,
        default: ''
    },
    favorites: {
        type: [String]
    }
});

UserSchema.plugin(mongoosePaginate);
const UserModel = model('users', UserSchema);

export default UserModel;
