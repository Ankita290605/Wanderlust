const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("hi, im root");
})

app.get("/testListing", async(req, res) => {
    let sample = new listing({
        title: "My Villa",
        description: "hello everyone",
        price: 5000,
        location: "Jalandhar",
        country: "India"
    });

    await sample.save();
    console.log("Saved");
    res.send("successful testing");

})



app.listen(8080, () => {
    console.log("server is listening to port 8080");
})

