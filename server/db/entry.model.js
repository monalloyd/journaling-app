const mongoose = require("mongoose");

const { Schema } = mongoose;

const EntrySchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: false }],
    content: { type: String, required: true }
});

module.exports = mongoose.model("Entry", EntrySchema);