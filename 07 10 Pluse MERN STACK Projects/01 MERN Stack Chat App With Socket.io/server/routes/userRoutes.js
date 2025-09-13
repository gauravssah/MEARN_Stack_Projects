import express from "express";
import { checkAuth, login, Signup, updateProfile } from "../controllers/userController";
import { protectRoute } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.post("/login", login);
userRouter.post("/update-profile", protectRoute, updateProfile);
userRouter.post("/check", protectRoute, checkAuth);

export default userRouter;
