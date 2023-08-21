import dotenv from 'dotenv';
import RecipeModel from '../src/models/RecipeModel.js';
import UserModel from '../src/models/UserModel.js';
import mongoose from "mongoose";
import seedRecipesJson from '../data/seedRecipes.json' assert {type: "json"};
import bcrypt from "bcrypt";

dotenv.config();

const seedUsers = async () => {
    try {
        await UserModel.deleteMany();

        const mockUsers = [
            {
                _id: "60b3f5b8e8b7c2a0e8f6b1a0",
                username: "johnsmith",
                password: await bcrypt.hash('password123', 10),
                email: "johnsmith@example.com",
                admin: false,
                createdAt: "2023-05-30T09:00:00Z",
                profilePicture: "",
            },
            {
                _id: "60b3f5b8e8b7c2a0e8f6b1a2",
                username: "emilybrown",
                password: await bcrypt.hash('password789', 10),
                email: "emilybrown@example.com",
                admin: false,
                createdAt: "2023-02-30T11:00:00Z",
                profilePicture: "",
            },
            {
                _id: "60b3f5b8e8b7c2a0e8f6b1a4",
                username: "sophiawilson",
                password: await bcrypt.hash('password456', 10),
                email: "sophiawilson@example.com",
                admin: true,
                createdAt: "2023-05-30T13:00:00Z",
                profilePicture: "",
            },
            {
                _id: "60b3f5c8e8b7c2a0e8f6b1a1",
                username: "emilyjones",
                password: await bcrypt.hash('password566', 10),
                email: "emilyjones@example.com",
                admin: false,
                createdAt: "2023-01-31T10:00:00Z",
                profilePicture: "",
            },
            {
                _id: "60b3f5d8e8b7c2a0e8f6b1a2",
                username: "michaelbrown",
                password: await bcrypt.hash('password789', 10),
                email: "michaelbrown@example.com",
                admin: false,
                createdAt: "2023-06-01T11:00:00Z",
                profilePicture: "",
            },
            {
                _id: "60b3f5e8e8b7c2a0e8f6b1a3",
                username: "sarahwhite",
                password: await bcrypt.hash('password012', 10),
                email: "sarahwhite@example.com",
                admin: false,
                createdAt: "2023-06-02T12:00:00Z",
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

    } catch (error) {
        console.log('Error occured while seeding recipes to database', error);
    }
};

const seedAll = async () => {
    const args = process.argv;

    if (!args.includes('please-do-seed')) {
        console.log('WARNING!!');
        console.log('You are about to replace all the data in your database');
        console.log('with mockup / seed data ! This operation is irreversible !!');
        console.log('If you know what you are doing, add "please-do-seed" argument.');
        process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await seedUsers();
    await seedRecipes();

    console.log('Done seeding');
    process.exit(0);
}

seedAll();