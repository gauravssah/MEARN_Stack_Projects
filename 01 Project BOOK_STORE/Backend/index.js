import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
dotenv.config();

// Middleware to handle CORS and JSON parsing
app.use(cors());
app.use(express.json()); // This must be before your routes

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
    await mongoose.connect(URI); // No options needed
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Your BookNest app listening on port ${PORT}`);
});
