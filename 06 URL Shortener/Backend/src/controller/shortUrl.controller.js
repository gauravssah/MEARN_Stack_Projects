import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";

export const createShortUrl = async (req, res) => {
    const { url } = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL + shortUrl);

};


export const redirectFromShortUrl = async (req, res) => {
    const { id } = req.params;
    const url = await urlScheme.findOne({ short_url: id });
    if (url) {
        res.redirect(url.full_url);
    } else {
        res.status(404).send("Not Found!");
    }
};