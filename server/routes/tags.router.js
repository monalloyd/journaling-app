const { Router } = require("express");
const TagModel = require("../db/tag.model");

const tagsRouter = new Router();

tagsRouter.get("/", async (req, res) => {
    const tags = await TagModel.find().sort({ name: "asc" });
    return res.json(tags);
});

module.exports = tagsRouter;