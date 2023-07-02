import jwt from "jsonwebtoken";
const { AUTH_MAX_AGE } = process.env;
const { JWT_SECRET } = process.env;

const generateToken =  (payload) => {
    return jwt.sign(
        {
            id: payload.id,
            username: payload.username,
            admin: payload.admin,
        },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );
};

const refreshAuthTokenCookie = (req, res, next) => {
    //1. Check if there is a token in the cookie
    //2. If there is no token, do nothing
    //3. If there is a token, verify it
    //4. Create a new token
    //5. Add it to the cookie
    //6. (both have 15min expiration time, starting now)

    const token = req.cookies.token;
    if (!token) {
        console.log('no token found in cookie');
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const newToken = generateToken(decoded);
        res.cookie('token', newToken, {
            httpOnly: true,
            maxAge: AUTH_MAX_AGE,
        });
        next();
    } catch (error) {
        return res.status(401).json({error: 'invalid token'})
    }
}

export { generateToken, refreshAuthTokenCookie };