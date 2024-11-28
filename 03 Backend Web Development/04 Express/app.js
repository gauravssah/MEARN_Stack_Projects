const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/",
    // This is a middleware
    (req, res, next) => {
        let a = 5;
        let b = 4;

        if (a + b == 9) {
            console.log("before next: ", a + b);
            // return next();
            next();
            console.log("after next: ", a + b);
        }

    }, (req, res) => {
        res.render("index")
    })

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/profile", (req, res) => {
    res.send("Profile page")
})

app.listen(3000);