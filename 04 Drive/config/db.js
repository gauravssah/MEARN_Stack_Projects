// Import the Mongoose library for interacting with MongoDB
const mongoose = require('mongoose');

// Function to connect to the MongoDB database
function connectToDB() {
    // Use Mongoose to connect to the database using the connection string from environment variables
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            // Log a success message if the connection is successful
            console.log("Connected to DB");
        })
        .catch((err) => {
            // Log an error message if the connection fails
            console.error("Error connecting to DB:", err.message);
        });
}

// Export the connectToDB function so it can be used in other parts of the application
module.exports = connectToDB;
