const { Router } = require("express");
const mongoose = require("mongoose");
const Comment = require("../models/Comment");
const User = require("../models/User");
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
router.put("/:commentId", async (req, res) => {
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
    const user = await User.findById("61a4de00e2014bc8af754993");
    console.log(user);
    const {userID,username, avatar } = user;
    const { postID,  text } = req.body;
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

//api/comments/remove
router.delete('/remove', async (req, res) => {

  const { commentID } = req.body;

  try {
    await Comment.deleteOne({'_id': commentID});
    res.json({
      message: `Comment has been removed`
    })
  } catch (error) {
    res.status(500).json({
      message: "Can't delete post: Something went wrong",
      errors: error.message
    });
  }
});
module.exports = router;
