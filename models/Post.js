const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  authorID: {
    type: Types.ObjectId,
    ref: "User",
  },
  imageURL: {
    type: "String",
  },
  caption: {
    type: "String",
  },
  date: {
    type: "String",
    default: Date.now,
  },
  likes: [{ type: Types.ObjectId, ref: "User" }],
});

module.exports = model("Post", schema);
