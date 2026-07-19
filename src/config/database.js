import mongoose from 'mongoose';
import config from './config.js';
import dns from "node:dns/promises";

const connectDB = async () => {
    try {
        dns.setServers(["1.1.1.1", "8.8.8.8"]);
        const conn = await mongoose.connect(config.mongoUrl, {
            serverSelectionTimeoutMS: 20000,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
       
    }
};

export default connectDB;
