import bcrypt from "bcrypt";
import {generateToken} from "../config/jwt.js";
import UserModel from "../models/UserModel.js";
import Joi from 'joi';

const { AUTH_MAX_AGE } = process.env;

function isPasswordValid(password) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{8,}$/;
    return reg.test(password);
}

// ----------------- SIGN UP ----------------- //
async function signUp (req, res, next) {
    const schema = Joi.object({
        email: Joi.string().min(3).max(50).email().required(),
        username: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(8).max(30).required(),
    })

    const validation = schema.validate(req.body);

    if (validation.error) {
        return res.status(400).json({
            status: "error",
            error: validation.error
        });
    }

    if (!isPasswordValid(req.body.password)) {
        return res.status(400).json({
            status: "error",
            error: 'Invalid password'
        });
    }

    const receivedUsername = req.body.username.trim();
    const receivedEmail = req.body.email.trim().toLowerCase();
    const receivedPassword = req.body.password;

    try {
        const existingUser = await UserModel.findOne({ $or: [{
                email: receivedEmail
            }, {
                username: receivedUsername
            }]
        });

        if (existingUser && existingUser.username === receivedUsername) {
            return res.status(409).json({
                status: "error",
                error: 'Username already taken'
            });
        }

        if (existingUser && existingUser.email === receivedEmail) {
            return res.status(409).json({
                status: "error",
                error: 'You already have an account with this email'
            });
        }

        const hashedPassword = await bcrypt.hash(receivedPassword, 10);

        const newUser = await UserModel.create({
            username: receivedUsername,
            password: hashedPassword,
            email: receivedEmail,
            admin: false,
            createdAt: new Date(),
        });

        // To use only if we want to automatically log in the user after signing up
        //
        // const payload = {
        //     id: newUser.id,
        //     admin: newUser.admin,
        // };
        //
        // const token = await generateToken(payload);
        //
        // res.cookie('token', token, {
        //     httpOnly: true,
        //     maxAge: process.env.AUTH_MAX_AGE,
        //     sameSite: 'none',
        //     secure: true
        // });

        return res.status(200).json({
            status: 'success',
            message:'user signed up successfully'
        });
    } catch(error) {
        return next(error);
    }
};

// ----------------- LOG IN ----------------- //
const logIn = async (req, res, next) => {
    const receivedEmail = req.body.email?.trim().toLowerCase();
    const receivedPassword = req.body.password;

    if (!receivedEmail || !receivedPassword) {
        return res.status(400).json({error: 'Missing required fields'});
    }

    try {
        const user = await UserModel.findOne({ email: receivedEmail });

        if (!user) {
            return res.status(401).json({error: 'Invalid email or password'});
        }

        const passwordMatching = await bcrypt.compare(receivedPassword, user.password);

        if (!passwordMatching) {
            return res.status(401).json({error: 'invalid email or password'});
        }

        const payload = {
            id: user._id,
            username: user.username,
            admin: user.admin,
        };

        console.log(payload)

        const token = await generateToken(payload);

        console.log(token)

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 900000,
            sameSite: 'none',
            secure: true
        });

        res.status(200).json({message: 'signed in successfully'});

    } catch (error) {
        next(error);
    }
}

// ----------------- SIGN OUT ----------------- //
const signOut = (req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).json({message: 'Signed out successfully'});
    } catch(error) {
        next(error);
    }
};

export {signUp, logIn, signOut};