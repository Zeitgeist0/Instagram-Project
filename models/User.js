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
  _id: { type: Types.ObjectId, ref: "Users" },
  following: [{ type: Types.ObjectId, ref: "Users" }],
  follows: [{ type: Types.ObjectId, ref: "Users" }],
});

module.exports = model("User", schema);
