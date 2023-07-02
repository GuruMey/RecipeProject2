import profilePictureModel from "../models/ProfilePictureModel.js";
import joi from "joi";

const profilePictureValidation = joi.object({
    userId: joi.string().required(),
    profilePicture: joi.string().required()
});

const addProfilePicture = async (req, res) => {
    try {
        const {error} = profilePictureValidation.validate(req.body);
        if (error) {
            return res.status(400).json({error: error.details[0].message});
        }
        await profilePictureModel.create({
            userId: req.body.userId,
            profilePicture: req.body.profilePicture
        });
        return res.status(201).json('status: success');
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const getProfilePictureByUser = async (req, res) => {
    try {
        const profilePicture = await profilePictureModel.findOne({userId: req.params.userId});
        return res.status(200).json(profilePicture);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const updateProfilePicture = async (req, res) => {
    try {
        const profilePicture = await profilePictureModel.updateOne({userId: req.params.userId}, {picture: req.body.picture});
        return res.status(200).json(profilePicture);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const deleteProfilePicture = async (req, res) => {
    try {
        await profilePictureModel.deleteOne({userId: req.params.userId});
        return res.status(200).json({status: 'success'});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export {addProfilePicture, getProfilePictureByUser, updateProfilePicture, deleteProfilePicture};