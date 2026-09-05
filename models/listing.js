const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/open-book-on-wooden-chair-GxLHMk-jRsg",
        set: (v) => 
            v === ""
            ? "https://unsplash.com/photos/open-book-on-wooden-chair-GxLHMk-jRsg"
            : v,
    },
    price: String,
    location: String,
    country: String,
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;