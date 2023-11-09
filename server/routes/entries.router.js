const { Router } = require("express");
const EntryModel = require("../db/entry.model");

const entriesRouter = new Router();

entriesRouter.get("/", async (req, res) => {
    const entries = await EntryModel.find().sort({ date: "desc" }).populate("tags");
    return res.json(entries);
});

module.exports = entriesRouter;