import mongoose from 'mongoose';
const { Schema, model } = mongoose;

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
        type: String
    },
    favorites: {
        type: [String]
    }
});

const UserModel = model('users', UserSchema);

export default UserModel;
