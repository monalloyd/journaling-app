require("dotenv").config();
const mongoose = require("mongoose");
const entries = require("./entries.json");
const tags = require("./tags.json");
const EntryModel = require("../db/entry.model");
const TagModel = require("../db/tag.model");
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const populateDatabase = async () => {
    await TagModel.deleteMany({});

    const tagArray = tags.map((tag) => {
        return ({
          name: tag,
        })
    });

    const allTags = await TagModel.create(...tagArray);
    console.log("Tags created");

    await EntryModel.deleteMany({});

    const entryArray = entries.map((entry) => {
        const title = entry.title;
        const date = entry.date;
        const tags = allTags.filter((tag) => tag.name === entry.tags[0]);
        const content = entry.content;
    
        return ({
            title,
            date,
            tags,
            content
        })
    });

    await EntryModel.create(...entryArray);
    console.log("Entries created");
};

const main = async () => {
    await mongoose.connect(mongoUrl);

    await populateDatabase();

    await mongoose.disconnect();
};

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
