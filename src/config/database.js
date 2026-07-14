import mongoose from 'mongoose';
import config from './config.js';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.mongoUrl, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
