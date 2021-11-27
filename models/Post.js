const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  authorID: {
    type: Types.ObjectId,
    ref: "Users",
  },
  imgURL: {
    type: "String",
  },
  caption: {
    type: "String",
  },
  date: {
    type: "String",
    default: Date.now,
  },
  likes: [{ type: Types.ObjectId, ref: "Users" }],
});

module.exports = model("Post", schema);
