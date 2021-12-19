const { Router } = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");

const router = Router();

// api/profiles

router.get("/", async (req, res) => {
  try {
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
// api/profiles/follow
router.put("/follow", async (req, res) => {
  try {
    const { userID } = req.body;
    const user = await User.findById(userID);
    let { following } = user;
    if (!following[0]) {
      following.push(userID);
    } else {
      following.splice(0, 1);
    }
    await user.save();

    res.status(201).json({
      message: "Following action completed",
    });
  } catch (error) {
    res.status(500).json({
      message: "Can't complete action",
      errors: error.message,
    });
  }
});
module.exports = router;
