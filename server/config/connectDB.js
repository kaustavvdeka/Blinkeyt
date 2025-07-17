import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
if(!process.env.MONGODB_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI) // Ensure MONGO_URI is defined in your .env file
        console.log("MongoDB connected successfully");

    }catch(error) {
    
        console.error("Error connecting to MongoDB:", error);
        process.exit(1) // Re-throw the error to be handled by the caller
    }
}
export default connectDB;