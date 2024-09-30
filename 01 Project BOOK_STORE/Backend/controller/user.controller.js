import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";


// Signup ----->

export const signup = async (req, res) => {
    try {

        const { fullname, email, mobileNumber, password } = req.body;

        if (!fullname || !email || !mobileNumber || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        const createdUser = new User({
            fullname,
            email,
            mobileNumber,
            password: hashPassword,
        });

        await createdUser.save();
        res.status(201).json({ message: "User created successfully!" });

    } catch (error) {
        console.log("Error from signUp: ", error);
        res.status(500).json({ message: "Internal server error!" });
    }
}


// Login ----->

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const isUser = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, isUser.password);

        if (!isUser || !isMatch) {
            return res.status(400).json({ message: "Invalid Credentials!" });
        } else {
            res.status(200).json({
                message: "Login successful!",
                user: {
                    _id: isUser._id,
                    fullname: isUser.fullname,
                    email: isUser.email,
                    number: isUser.mobileNumber,
                }
            });
        }

    } catch (error) {
        console.log("Error form login: ", error);
        res.status(500).json({ message: "Internal server error!" });
    }
}
