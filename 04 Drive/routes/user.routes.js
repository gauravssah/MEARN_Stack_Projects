const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// GET route for rendering the registration page
router.get("/register", (req, res) => {
    res.render("register");
});

// POST route for handling user registration
router.post(
    "/register",
    [
        // Validate email
        body('email')
            .trim()
            .isEmail()
            .withMessage("Please provide a valid email address."),

        // Validate firstname (minimum 2 characters)
        body('firstname')
            .trim()
            .isLength({ min: 2 })
            .withMessage("First name must be at least 2 characters long."),

        // Validate lastname (minimum 2 characters)
        body('lastname')
            .trim()
            .isLength({ min: 2 })
            .withMessage("Last name must be at least 2 characters long."),

        // Validate username (minimum 3 characters)
        body('username')
            .trim()
            .isLength({ min: 3 })
            .withMessage("Username must be at least 3 characters long."),

        // Validate password (minimum 5 characters)
        body('password')
            .trim()
            .isLength({ min: 5 })
            .withMessage("Password must be at least 5 characters long.")
    ],
    async (req, res) => {

        // Check validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // If there are validation errors, return a 400 response with detailed errors
            return res.status(400).json({
                errors: errors.array(), 
                message: "Invalid registration data."
            });
        }

        // If validation passes, proceed with further logic (e.g., saving user to the database)
        const { email, firstname, lastname, password, username } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            firstname,
            lastname,
            username,
            email,
            password: hashPassword
        });
        res.json(newUser);

    }
);

// Rendering GET route for rendering the Login page
router.get("/login", (req, res) => {
    res.render("login")
});

// POST route for handling user login

router.post('/login',
    body("username").trim().isLength({ min: 3 }),
    body("password").trim().isLength({ min: 5 }),
    async (req, res) => {

        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
                message: "Invalid data"
            })
        }

        const { username, password } = req.body;

        const user = await userModel.findOne({
            username: username
        });

        if (!user) {
            return res.status(400).json({
                message: "username or password is incorrect!"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "username or password is incorrect!"
            })
        }

        const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
        },
            process.env.JWT_SECRET,
        )

        res.send("Logged in")




    }
)



module.exports = router;
