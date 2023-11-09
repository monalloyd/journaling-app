require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const entriesRouter = require("./routes/entries.router");
const tagsRouter = require("./routes/tags.router");

const { MONGO_URL, PORT } = process.env;

if (!MONGO_URL) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
}

const app = express();
app.use(express.json());

app.use("/api/entries", entriesRouter);
app.use("/api/tags", tagsRouter);

const main = async () => {
    await mongoose.connect(MONGO_URL);
  
    app.listen(PORT, () => {
        console.log("App is listening on " + PORT);
    });
};
  
main().catch((err) => {
    console.error(err);
    process.exit(1);
});