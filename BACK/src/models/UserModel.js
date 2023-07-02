import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    email: {
        type: String,
        unique: true
    },
    admin: Boolean,
    createdAt: Date,
    profilePicture: String,
    favorites: [String]
});

const UserModel = model('users', UserSchema);

export default UserModel;
