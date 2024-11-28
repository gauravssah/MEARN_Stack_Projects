const mongoose = require('mongoose');

// Define the User schema with field types, validations, and options
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name is required"], // Custom error message for missing field
        trim: true, // Remove leading/trailing whitespaces
        minlength: [2, "First name must be at least 2 characters long"], // Minimum length validation
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"], // Custom error message for missing field
        trim: true,
        minlength: [2, "Last name must be at least 2 characters long"], // Minimum length validation
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true, // Ensure username is unique
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"], // Minimum length validation
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, // Ensure email is unique
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regex for validating email format
            "Please enter a valid email address", // Custom error message for invalid email
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"], // Minimum password length
        select: false, // Exclude password field by default in queries for security
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Pre-save hook to ensure proper data handling (optional, e.g., for hashing passwords)
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     // Add password hashing logic here if needed
//     next();
// });

// Export the model to be used in other parts of the application
const User = mongoose.model('user', userSchema);
module.exports = User;
