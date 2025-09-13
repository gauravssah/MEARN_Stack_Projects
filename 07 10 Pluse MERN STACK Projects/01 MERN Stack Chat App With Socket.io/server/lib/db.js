import mongoose from "mongoose";


// Function to connect to the mongodb database

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"))

        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
    } catch (error) {
        console.log(error);
    }  // 2:27
}



// mongodb+srv://gauravssah:gauravsah@cluster0.dz7hkqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

