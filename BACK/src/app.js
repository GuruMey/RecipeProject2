import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes.js';
import userRoutes from "./routes/userRoutes.js";
import {connectDatabase} from "./config/database.js";

dotenv.config();

const port = process.env.PORT;

console.log("Je suis le 1er console.log de app.js")

const app = express();

connectDatabase()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

console.log("Je suis le 2e console.log de app.js")


console.log("Je suis le 3e console.log de app.js")

if (!port) {
    throw new Error("Port must be defined")
}

app.listen(port, ()=> (
    console.log('server is running on port', port)
))
