const mongoose = require("mongoose");

const { Schema } = mongoose;

const EntrySchema = new Schema({
    title: { type: String, default: "New Entry" },
    date: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: false }],
    content: { type: String, required: false }
});

module.exports = mongoose.model("Entry", EntrySchema);