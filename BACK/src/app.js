// Import libraries and functions
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import {connectDatabase} from "./config/database.js";
import errorHandler from './middleware/errorHandler.js';
import {refreshAuthTokenCookie} from "./config/jwt.js";

// Import Routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import ratingRoutes from "./routes/ratingRoutes.js";

// Activate express
const app = express();

dotenv.config();

// Use middlewares
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

// Connect to database
connectDatabase()

// Refresh auth cookie (if exists)
app.use(refreshAuthTokenCookie);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/recipe', recipeRoutes);
app.use('/api/rating', ratingRoutes);

// Error handler middleware
app.use(errorHandler);


// Start Server
if (!process.env.PORT) {
    console.error('Missing PORT environment variable. Try running "source .env"');
    process.exit(1);
}


const port = process.env.PORT;
app.listen(port, ()=> (
    console.log('server is running on port', port)
))
