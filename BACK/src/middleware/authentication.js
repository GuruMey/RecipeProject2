import jwt from 'jsonwebtoken';
import '../models/UserModel.js'

const { JWT_SECRET } = process.env;

const authenticateUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({error: 'Unauthorized'});
    };

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({error: 'Invalid token'});
    }
};

export { authenticateUser };