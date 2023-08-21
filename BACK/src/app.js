import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import {connectDatabase} from "./config/database.js";
import errorHandler from './middleware/errorHandler.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from "./routes/userRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();

dotenv.config();

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(express.json({
    limit: '10mb'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

connectDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/recipe', recipeRoutes);

app.use(errorHandler);

if (!process.env.PORT) {
    console.error('Missing PORT environment variable. Try running "source .env"');
    process.exit(1);
}

const port = process.env.PORT;

app.listen(port, ()=> (
    console.log('server is running on port', port)
))
