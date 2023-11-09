const mongoose = require("mongoose");

const { Schema } = mongoose;

const TagSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Tag", TagSchema);