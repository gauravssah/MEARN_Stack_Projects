import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";


// POST REGISTER
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        // validations
        if (!name) {
            return res.send({ message: "Name is required" });
        };

        if (!email) {
            return res.send({ message: "email is required" });
        };

        if (!password) {
            return res.send({ message: "password is required" });
        };

        if (!phone) {
            return res.send({ message: "phone is required" });
        };

        if (!address) {
            return res.send({ message: "address is required" });
        };

        if (!answer) {
            return res.send({ message: "answer is required" });
        };


        // check user
        const exisitingUser = await userModel.findOne({ email });
        // existing user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: "User Already exist Please Login.",
            });
        };

        // register user
        const hashedPassword = await hashPassword(password);
        // save 
        const user = await new userModel({ name, email, phone, answer, address, password: hashedPassword }).save();

        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
};


// POST LOGIN 
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }

        // check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not register"
            })
        };

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(404).send({
                success: false,
                message: "Invalid Password"
            })
        };

        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        // all good then send

        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                address: user.address,

            }, token
        });



    } catch (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            message: "Error in Login",
            error,
        })
    };
};

// forgotPasswordController

export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;

        if (!email) {
            res.status(400).send({ message: "Email is required!" })
        }
        if (!answer) {
            res.status(400).send({ message: "Answer is required!" })
        }
        if (!newPassword) {
            res.status(400).send({ message: "New Password is required!" })
        }

        // check
        const user = await userModel.findOne({ email, answer });

        // validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Worng email or Answer!"
            })
        }

        const hashedNewPassword = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashedNewPassword });
        res.status(200).send({
            success: true,
            message: 'Password Reset Successfully',
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong!",
            error
        })
    }
}

// test controller
export const testController = (req, res) => {
    res.send("Procted rourt hai ye");
}



