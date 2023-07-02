import jwt from "jsonwebtoken";
const generateToken =  (payload) => {
    return jwt.sign(
        {
            id: payload.id,
            username: payload.username,
            email: payload.email,
            admin: payload.admin,
        },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );
};

export { generateToken };