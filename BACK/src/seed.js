import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../src/models/userModel';


const seedUsers = async () => {
    try {
        await User.deleteMany();

        const mockUsers = [
            {
                firstName: 'Kubo',
                lastName: 'Fayet',
                email: 'kubo@wouaf.com',
                password: await bcrypt.hash('user123',10),
                role: 'user',
                profilePicture: 'https://people.com/thmb/CuByPIGM40fE2i4tV8oELXVquiU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x626:1021x628):format(webp)/dog-dating-2522ccf2b0e04f94a29f25fdb81d79af.jpg',
            },
            {
                firstName: 'Kuba',
                lastName: 'Fayette',
                email: 'kuba@wouaf.com',
                password: await bcrypt.hash('admin123',10),
                role: 'admin',
                profilePicture: 'https://w0.peakpx.com/wallpaper/413/479/HD-wallpaper-dogs-puppy-dog-poppy-profile.jpg',
            }
        ];

        await User.create(mockUsers);
        console.log('Mockup Users created succefully')
    } catch(error) {
        console.log('error occurred while seeding users:', error )

    }
}

const seedAll = async () => {

    //Guard
    const arguments = process.argv;

    if (!arguments.includes('i-am-a-pro')) {
        console.log('WARNING!!');
        console.log('You are about to replace all the data in your database');
        console.log('If you want to continue, run this script with the following argument:');
        console.log('i-am-a-pro');
        process.exit(1);
    };


    //Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Run the seeding functions
    await seedUsers();

    //Finish up
    console.log('Seeding done.');
    process.exit(0);
}

seedAll();

