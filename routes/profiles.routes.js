const { Router } = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");

const router = Router();

// api/profiles

router.get("/", async (req, res) => {
  try {
    // const comments = await Comment.find({ postID: req.body.postID });
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Can't get users: Something went wrong",
      errors: error.message,
    });
  }
});

// // api/profiles/:userID

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    // const users = await User.find({});
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Can't get user: Something went wrong",
      errors: error.message,
    });
  }
});
// api/profiles/post
router.post("/post", async (req, res) => {
  try {
    const { name, surname, avatar, username } = req.body;
    const user = await new User({
      name: name,
      surname: surname,
      username: username,
      avatar: avatar,
      _id: new mongoose.Types.ObjectId(),
      followings: new mongoose.Types.ObjectId(),
      follows: new mongoose.Types.ObjectId(),
    });
    await user.save();

    res.status(201).json({
      message: "New user has been created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Can't create user: Something went wrong",
      errors: error.message,
    });
  }
});
module.exports = router;
