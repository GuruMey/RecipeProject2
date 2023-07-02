import bcrypt from "bcrypt";
import {generateToken} from "../config/jwt.js";
import UserModel from "../models/UserModel.js";
const { AUTH_MAX_AGE } = process.env;



// ----------------- SIGN UP ----------------- //

function isPasswordValid(password) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{8,}$/;
    return reg.test(password);
}
async function signUp (req, res) {
    const receivedUsername = req.body.username;
    const receivedEmail = req.body.email;
    const receivedPassword = req.body.password;

    if (!receivedUsername || !receivedEmail || !receivedPassword) {
        return res.status(400).json({error: 'Missing required fields'});
    }

    if (!isPasswordValid(receivedPassword)) {
        return res.status(400).json({error: 'Invalid password'});
    }

    // todo: add validation for username, email, password

    try {
        const existingUser = await UserModel.findOne({ $or: [{
                email: receivedEmail
            }, {
                username: receivedUsername
            }]
        });

        if (existingUser && existingUser.email === receivedEmail) {
            return res.status(409).json({error: 'You already have an account with this email'});
        }

        if (existingUser && existingUser.username === receivedUsername) {
            return res.status(409).json({error: 'Username already taken'});
        }

        const hashedPassword = await bcrypt.hash(receivedPassword, 10);

        const newUser = await UserModel.create({
            username: receivedUsername,
            password: hashedPassword,
            email: receivedEmail,
            admin: false,
            createdAt: new Date(),
        });

        const payload = {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            admin: newUser.admin,
        };

        const token = await generateToken(payload);

        res.cookie('token', token, {
            httpOnly: false,
            secure: true,
            maxAge: AUTH_MAX_AGE,
        });

        return res.status(200).json({message:'user signed up successfully'});
    } catch(error) {
        console.error(error)
        res.status(500).json({error: error});
    }
};

// ----------------- LOG IN ----------------- //
const logIn = async (req,res,next) => {
    const receivedEmail = req.body.email;
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

        res.status(400).json({error: error});

    }
}

// ----------------- SIGN OUT ----------------- //
const signOut = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({message: 'Signed out successfully'});
};

export {signUp, logIn, signOut};