const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({ path: "pass.env" });
const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database was successfully connected"))
  .catch((err) => console.log(err));

app.listen(5001, (err, res) => {
  console.log("Started");
});
