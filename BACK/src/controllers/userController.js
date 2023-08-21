import UserModel from "../models/UserModel.js";
import Joi from "joi";
import bcrypt from "bcrypt";


const createUser = async (req, res) => {

    const userModel= Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        admin: Joi.boolean().default(false).valid(false , true),
        createdAt: Joi.date(),
        profilePicture: Joi.string(),
    });

    try {
        const {error} = userModel.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        const {username, password, email, admin, createdAt, profilePicture} = req.body;

        const found = UserModel.findOne({email});

        if (found) {
            return res.status(400).json({message: 'Email already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            username,
            password: hashedPassword,
            email,
            admin,
            createdAt,
            profilePicture
        });

        return res.status(201).json({data: newUser});

    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find().select('-password')

        return res.status(200).json({
            status: "success",
            data: {
                users,
            }
        });
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.userId).select('-password');
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json({data: user});
    } catch (error) {
        next(error);
    }
};

const editUser = async (req, res) => {
    const receivedUserId = req.params.userId;
    const fieldValuesToUpdate = req.body.fieldValuesToUpdate;


    const userModel= Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        admin: Joi.boolean().default(false).valid(false , true),
        createdAt: Joi.date(),
        profilePicture: Joi.string(),
    });

    try {
        const {error} = userModel.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        const {username, password, email, admin, createdAt, profilePicture} = req.body;

        const found = userModel.findOne({email});


        let editUser;
        if (password!=='') {
            const hashedPassword = await bcrypt.hash(password, 10);
            editUser = await UserModel.findByIdAndUpdate(
              req.params.id,
            {
                username,
                password: hashedPassword,
                email,
                admin,
                createdAt,
                profilePicture,
            },
            {new: true}
        ).select('-password');
        } else {
            editUser = await UserModel.findByIdAndUpdate(
                req.params.id,
                {
                    username,
                    email,
                    admin,
                    createdAt,
                    profilePicture,
                },
                {new: true}
            ).select('-password');
        };

        if (!editUser) {
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json({data: editUser});
    } catch (error) {
        next(error);
    }
        };


const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await UserModel.findByIdAndRemove(req.params.userId);

        if (!deletedUser) {
            return res.status(404).json({message: 'User not found'});
        }

        return res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        next(error);
    }
}

export {editUser, deleteUser, getAllUsers, getUserById, createUser};
