const { Router } = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Post");

const router = Router();

//api/posts/create/:authorId
router.post("/create/:authorId", async (req, res) => {
  try {
    const { imageURL, caption } = req.body;
    const post = new Post({
      authorID: req.params.authorId,
      imageURL: imageURL,
      caption: caption,
      likes: new mongoose.Types.ObjectId(),
    });
    await post.save();

    res.status(201).json({
      message: "new post has been created",
      postData: { ...post },
    });
  } catch (error) {
    res.status(500).json({
      message: "Can't save post: Something went wrong",
      errors: error.message,
    });
  }
});

// api/posts/queryByAuthorsID
router.get("/queryByAuthorsID", async (req, res) => {
  try {
    const { query } = req.body,
      posts = await Post.find({ authorID: query });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Can't get posts: Something went wrong",
      errors: error.message,
    });
  }
});

module.exports = router;
