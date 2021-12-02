const { Router } = require("express");
const mongoose = require("mongoose");
const Comment = require("../models/Comment");

const router = Router();

// api/comments
router.get("/", async (req, res) => {
  try {
    Comment.find()
      .populate("postID")
      .populate("userID")
      .exec()
      .then((comments) => res.json(comments));
  } catch (error) {
    res.status(500).json({
      message: "Can't get comments: Something went wrong",
      errors: error.message,
    });
  }
});

// api/comments/:commentId
router.get("/:commentId", async (req, res) => {
  try {
    Comment.findById(req.params.commentId)
      .populate("postID")
      .populate("userID")
      .exec()
      .then((comments) => res.json(comments));
  } catch (error) {
    res.status(500).json({
      message: "Can't get comment: Something went wrong",
      errors: error.message,
    });
  }
});
// api/comments/post
router.post("/post", async (req, res) => {
  try {
    const { postID, userID, username, avatar, text } = req.body;
    const comment = await new Comment({
      username: username,
      avatar: avatar,
      text: text,
      postID: postID,
      userID: userID,
    });
    await comment.save();

    res.status(201).json({
      message: "New comment has been posted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Can't post comment: Something went wrong",
      errors: error.message,
    });
  }
});
module.exports = router;
