const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://unsplash.com/photos/neon-signs-in-shibuya-tokyo-street-p8lNJRI9MRc"
        }
    },
    price: Number,
    location: String,
    country: String,
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;