const express = require("express");
const app = express();


app.set("view engine", "ejs")

// this middlewere is used to linking the public files 
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/profile", (req, res) => {
    res.send("Profile page")
})

// app.get("/getting-form-data", (req, res) => {
//     console.log(req.query);
//     res.send("received")
// })


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/getting-form-data", (req, res) => {
    console.log(req.body);
    res.send("received")
})

app.listen(3000);