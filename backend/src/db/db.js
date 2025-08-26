import mongoose from "mongoose";

const url = "mongodb+srv://goutamjena023:xd0QFPsHWagkk3ls@cluster0.pu4nbas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`MongoDB Error ${err}`);
        process.exit(1); 
    }
};

export default connectDB;