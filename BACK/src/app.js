import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes.js';
import userRoutes from "./routes/userRoutes.js";
import {connectDatabase} from "./config/database.js";
import {deleteUser, editUser} from "./controllers/userController.js";
import router from "./routes/authRoutes.js";

 console.log("Je suis le 1er console.log de app.js")

dotenv.config();
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

//
// router.put('/editUser/:userId', editUser);
// router.put('/deleteUser/:userId', deleteUser);

// app.get("/user", async (req, res) => {
//     console.log("USER PAGE");
//
//     const user = new UserModel({
//         username: 'Gomez',
//         password: '123456',
//         email: 'gomez.addams@gmail.com',
//         admin: true,
//         created_at: '2021-03-01',
//         favorites: ['foo', 'bar'],
//     });
//
// // Inserts the user in MongoDB database
//     await user.save();
//
//     res.send("<h1>USER PAGE</h1>");
// });
//
//
// app.get("/recipe", async (req, res) => {
//     console.log("RECIPE PAGE");
//
//     const user = new RecipeModel({
//         title: 'Date et beurre de cacahuete',
//         description: 'Dessert simple et rapide',
//         preparationTime: 5,
//         ingredients: ['Date','Beurre de cacahuete', 'Gros sel'],
//         steps: ['Couper une date en deux', 'Mettre une demi cuillere a cafe de beurre de cacahuete a linterieur','Ajouter deux grains de sel', 'Congeler minimum 30 minutes'],
//         tags: ['Dessert', 'Date', 'Beurre de cacahuete'],
//         createdAt: '17/05/2023',
//         published: true
//     });
//
// // Inserts the user in MongoDB database
//     await recipe.save();
//
//     res.send("<h1>RECIPE PAGE</h1>");
// });
//
// console.log(process.env.MEY)


//START SERVER
const port = process.env.PORT ;

console.log("Je suis le 3e console.log de app.js")
app.listen(port, ()=> (
    console.log('server is running on port', port)
))
