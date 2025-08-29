const express = require("express");
const userRouter = require("./routes/user.routes");
const indexRouter = require("./routes/index.routes")
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();

const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.set("view engine", "ejs");

// These two middleweres are importent for getting req.body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// index route

app.use("/", indexRouter)


/* localhost:3000/user/test */
// userRouter ke ander jitne me routes banege sabhi si ek se chalege.
app.use("/user", userRouter);



app.listen(3000, () => {
    console.log("App is running on port: 3000");
})