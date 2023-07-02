import jwt from "jsonwebtoken";

const generateToken =  (payload) => {
    return jwt.sign(
        {
            id: payload.id,
            admin: payload.admin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.AUTH_MAX_AGE
        }
    );
};

export { generateToken };