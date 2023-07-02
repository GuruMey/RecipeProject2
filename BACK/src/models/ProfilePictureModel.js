import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProfilePictureSchema = new Schema({
    photo: String,
    userId: String
});

const ProfilePictureModel = model('profilePicture', ProfilePictureSchema);

export default ProfilePictureModel;
