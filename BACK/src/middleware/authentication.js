import jwt from 'jsonwebtoken';
import '../models/UserModel.js'
const { JWT_SECRET } = process.env;

const authenticateUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({error: 'Unauthorized'});
    }
    ;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({error: 'invalid token'});
    }
};

const authorizeUser = (roles) => {
    return (req, res, next) => {
        const { role } = req.user;
    }
}