const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const userRoute = require("./routes/user.routes");

// Load environment variables
dotenv.config();

// Connect to the database
connectToDB();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
