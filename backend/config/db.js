const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();//it will load the environment variables from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,// use the new mongodb connector
            useUnifiedTopology: true, // use the new unified topology
        });
        console.log('MongoDB connected');
        
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = connectDB;