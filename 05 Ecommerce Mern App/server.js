// const express = require("express");
// const color = require("colors");

import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";

import cors from "cors";


// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);


// rest api
app.get("/", (req, res) => {
    res.send("<h1>Wlcom to ecom</h1>")
})

// Port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} in ${process.env.DEV_MODE}`.bgBlue.white);
})
