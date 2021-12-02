const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  username: {
    type: String,
  },
  avatar: {
    type: String,
  },
  following: [{ type: Types.ObjectId, ref: "User" }],
  followers: [{ type: Types.ObjectId, ref: "User" }],
});

module.exports = model("User", schema);
