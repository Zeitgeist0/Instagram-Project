const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  postID: {
    type: Types.ObjectId,
    ref: "Post",
  },
  userID: {
    type: Types.ObjectId,
    ref: "User",
  },
  username: {
    type: "String",
  },
  avatar: {
    type: "String",
  },
  text: {
    type: "String",
  },
  date: {
    type: "String",
    default: Date.now,
  },
});

module.exports = model("Comment", schema);
