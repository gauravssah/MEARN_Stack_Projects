import express from "express";
import dotenv from 'dotenv';
dotenv.config("./.env");
import shortUrl from "./src/routes/shortUrl.route.js";
import connectDB from "./src/config/mongo.config.js";
import urlScheme from "./src/models/shortUrl.model.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/create', shortUrl);

app.get("/:id", redirectFromShortUrl);



let PORT = 3000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT} `);

})