const { Router } = require("express");
const TagModel = require("../db/tag.model");

const tagsRouter = new Router();

tagsRouter.get("/", async (req, res) => {
    const tags = await TagModel.find().sort({ name: "asc" });
    return res.json(tags);
});

tagsRouter.get("/:name", async (req, res) => {
    const tag = await TagModel.find({"name": { $regex: req.params.name, "$options": "i"}});
    return res.json(tag);
});

tagsRouter.post("/", async (req, res, next) => {
    try {
        const saved = await TagModel.create(req.body);
        return res.json(saved);
    } catch (err) {
        return next(err);
    }
});

module.exports = tagsRouter;