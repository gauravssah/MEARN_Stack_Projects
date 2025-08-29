
import urlSchema from "../models/shortUrl.model.js";

export const saveShortUrl = (shortUrl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shortUrl,
    });

    if (useId) {
        newUrl.user_id = userId;
    }

    newUrl.save();
}
