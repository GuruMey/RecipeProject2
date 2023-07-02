import dotenv from 'dotenv';
import RecipeModel  from '../src/models/RecipeModel.js';
import UserModel from '../src/models/UserModel.js';
import mongoose from "mongoose";
import seedRecipesJson from '../data/seedRecipes.json' assert { type: "json" };
import bcrypt from "bcrypt";

dotenv.config();


const seedUsers = async () => {
    try {
        await UserModel.deleteMany();

        const mockUsers = [
                    {
                        username: "johnsmith",
                        password: await bcrypt.hash('password123', 10),
                        email: "johnsmith@example.com",
                        admin: false,
                        createdAt: "2023-05-30T09:00:00Z",
                        profilePicture: "",
                        favorites: []
                    },
                    {
                        username: "alicejohnson",
                        password: await bcrypt.hash('password456', 10),
                        email: "alicejohnson@example.com",
                        admin: false,
                        createdAt: "2023-05-30T10:00:00Z",
                        profilePicture: "",
                    },
                    {
                        username: "emilybrown",
                        password: await bcrypt.hash('password789', 10),
                        email: "emilybrown@example.com",
                        admin: false,
                        createdAt: "2023-05-30T11:00:00Z",
                        profilePicture: "",
                    },
                    {
                        username: "michaeldavis",
                        password: await bcrypt.hash('passwordabc', 10),
                        email: "michaeldavis@example.com",
                        admin: false,
                        createdAt: "2023-05-30T12:00:00Z",
                        profilePicture: "",
                    },
                    {
                        username: "sophiawilson",
                        password: await bcrypt.hash('passworddef', 10),
                        email: "sophiawilson@example.com",
                        admin: false,
                        createdAt: "2023-05-30T13:00:00Z",
                        profilePicture: "",
                    }
        ]

        await UserModel.create(mockUsers);
        console.log('Mockup users created successfully');
    } catch (error) {
        console.log('Error occured while seeding Users', error)
    }
};

const seedRecipes = async () => {
    try {
        await RecipeModel.deleteMany();

        await RecipeModel.create(seedRecipesJson);

        console.log('Seed recipes added successfully');

    } catch(error) {
        console.log('Error occured while seeding recipes to database', error);
    }
};

const seedAll = async () => {

    // Guard
    const arg = process.argv;

    if (!arg.includes('please-do-seed')) {
        console.log('WARNING!!');
        console.log('You are about to replace all the data in your database');
        console.log('with mockup / seed data ! This operation is irreversible !!');
        console.log('If you know what you are doing, add "please-do-seed" argument.');
        process.exit(1);
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});

    // Run the seed functions
    await seedUsers();
    await seedRecipes();

    // Finish up
    console.log('Done seeding');
    process.exit(0);
    }

    seedAll();