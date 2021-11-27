const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({ path: "pass.env" });
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/profiles", require("./routes/profiles.routes"));
// app.use("/api/posts", require("./routes/posts.routes"));
app.use("/api/comments", require("./routes/comments.routes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database was successfully connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err, res) => {
  console.log("Started");
});
