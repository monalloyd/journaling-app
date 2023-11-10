const { Router } = require("express");
const EntryModel = require("../db/entry.model");

const entriesRouter = new Router();

entriesRouter.get("/", async (req, res) => {
    const entries = await EntryModel.find().sort({ date: "desc" }).populate("tags");
    return res.json(entries);
});

entriesRouter.get("/:id", async (req, res) => {
    const entry = await EntryModel.find({ _id: req.params.id }).populate("tags");
    return res.json(entry);
});

entriesRouter.post("/", async (req, res, next) => {
    try {
        const saved = await EntryModel.create(req.body);
        return res.json(saved);
    } catch (err) {
        return next(err);
    }
});

entriesRouter.put("/:id", async (req, res, next) => {
  const filter = { _id: req.params.id };
  let update = { $set: { ...req.body } };
  const options = { new: true };

  try {
      const entry = await EntryModel.findOneAndUpdate(filter, update, options);
      return res.json(entry);
    } catch (err) {
      return next(err);
    }
});

entriesRouter.delete("/:id", async (req, res, next) => {
  try {
    const res = await EntryModel.deleteOne({_id: req.params.id});
    return res;
  } catch (err) {
    return next(err);
  }
});

module.exports = entriesRouter;