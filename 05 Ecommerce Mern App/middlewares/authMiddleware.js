
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Route Middleware
export const requireSignIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Get token from Bearer
        if (!token) {
            return res.status(401).send({
                success: false,
                message: "Access Denied. No token provided.",
            });
        }

        const decode = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log("JWT Error:", error);
        return res.status(401).send({
            success: false,
            message: "Invalid or expired token",
        });
    }
};

// Admin Middleware
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(403).send({
                success: false,
                message: "Unauthorized Access: Admins only",
            });
        }
        next();
    } catch (error) {
        console.log("Admin Middleware Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in Admin Middleware",
            error,
        });
    }
};
