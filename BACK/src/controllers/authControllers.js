import bcrypt from "bcrypt";
import {generateToken} from "../config/jwt.js";
import UserModel from "../models/UserModel.js";

// ----------------- SIGN UP ----------------- //
const signUp = async (req,res,next) => {

    const {username, email, password} = req.body;

    try {
        const existingUser = await UserModel.findOne({email});

        if (existingUser) {
            return res.status(409).json({error: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            username,
            password: hashedPassword,
            email,
        });

        const payload = {
            id: newUser.id,
            username: newUser.username,
            password: newUser.password,
            email: newUser.email,
            admin: newUser.admin,
        };

        const token = await generateToken(payload);

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 900000, // =(15 minutes)
        });

        return res.status(200).json({message:'user signed up successfully'});
    } catch(error) {
        console.error(error)
        res.status(400).json({error: error});
    }
};


// ----------------- SIGN IN ----------------- //
const signIn = async (req,res,next) => {

    const {email, password} = req.body;

    try {

        const user = await userModel.findOne({email});
        // user.passwordHash = undefined;

        if (!user) {
            return res.status(401).json({error: 'Invalid email or password'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({error: 'invalid email or password'});
        }

        const payload = {
            id: user._id,
            username: user.username,
            email: user.email,
            admin: user.admin,
        };

        const token = await generateToken(payload);

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 900000,
        });

        res.status(200).json({message: 'signed in successfully'});

    } catch (error) {

        res.status(400).json({error: error});

    }
}

// ----------------- SIGN OUT ----------------- //
const signOut = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message: 'Signed out successfully'});

};

export {signUp, signIn, signOut};