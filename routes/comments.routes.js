const { Router } = require("express");
const mongoose = require("mongoose");
const Comment = require("../models/Comment");

const router = Router();

// api/comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.json(comments);
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
    const comment = await Comment.findById(req.params.commentId);
    res.json(comment);
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
    const { username, avatar, text } = req.body;
    const comment = await new Comment({
      username: username,
      avatar: avatar,
      text: text,
      postId: new mongoose.Types.ObjectId(),
      userId: new mongoose.Types.ObjectId(),
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
