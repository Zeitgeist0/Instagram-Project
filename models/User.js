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
  following: [{ type: Types.ObjectId, ref: "Users" }],
  followers: [{ type: Types.ObjectId, ref: "Users" }],
});

module.exports = model("User", schema);
