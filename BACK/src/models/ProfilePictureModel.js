import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProfilePictureSchema = new Schema({
    userId: {type:String , required: true, index:true, unique:true},
    picture: {type:String , required: true}
});

const ProfilePictureModel = model('profilePicture', ProfilePictureSchema);

export default ProfilePictureModel;
