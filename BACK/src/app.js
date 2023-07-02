import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'
import UserModel from "./models/UserModel.js";

const app = express();

app.use(cors());

const dbUrl = "mongodb+srv://leshemm:8xX5wDnAWpDFu1jW@cluster0.nepliqy.mongodb.net/recipes?retryWrites=true&w=majority"
await mongoose.connect(dbUrl).then(() => {
    console.log("Connected to MongoDB !");
}).catch((err) => {
    console.log("Failed to connect to MongoDB !", err);
})

app.get("/hello", async (req, res) => {
    console.log("world");

    const user = new UserModel({
        username: 'Gomez',
        password: '123456',
        email: 'gomez.addams@gmail.com',
        admin: true,
        created_at: '2021-03-01',
        favorites: ['foo', 'bar'],
    });

// Insert the user in MongoDB database
    await user.save();

    res.send("<h1>World</h1>");
});

app.listen(5003, () => {
    console.log('Our server is up and running on port 5003 !');
})
