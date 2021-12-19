const { Router } = require("express");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const router = Router();

//api/posts/create/:authorId
router.post("/create/:authorId", async (req, res) => {
  try {
    const { imageURL, caption } = req.body;
    console.log(req.body);
    const post = new Post({
      authorID: req.params.authorId,
      imageURL: imageURL,
      caption: caption,
    });
    await post.save();

    res.status(201).json({
      message: "new post has been created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Can't save post: Something went wrong",
      errors: error.message,
    });
  }
});
// api/posts/allPosts
router.get("/allPosts", async (req, res) => {
  try {
    Post.find()
      .populate("authorID")
      .exec()
      .then((posts) => {
        Comment.find()
          .populate("postID")
          .populate("userID")
          .exec()
          .then((comments) => {
            const postsList = posts.map(function (post) {
              const filteredComments = comments.filter(
                (comment) =>
                  post._id.toString() === comment.postID._id.toString()
              );
               
              const { _id, authorID, imageURL, caption, likes, date } = post;
              const wholePost = {
                _id: _id.toString(),
                authorID: authorID,
                imageURL: imageURL,
                caption: caption,
                likes: likes,
                date: date,
                comments: filteredComments,
              };
              return wholePost;
            });

            return res.json(postsList);
          });
      });
  } catch (error) {
    res.status(500).json({
      message: "Can't get posts: Something went wrong",
      errors: error.message,
    });
  }
});

// api/posts/queryByAuthorsID
router.get("/queryByAuthorsID", async (req, res) => {
  try {
    const { query } = req.body;
    Post.find({ authorID: query })
      .populate("authorID")
      .exec()
      .then((posts) => res.json(posts));
  } catch (error) {
    res.status(500).json({
      message: "Can't get posts: Something went wrong",
      errors: error.message,
    });
  }
});

// api/posts/like

router.put("/like", async (req, res) => {
  try {
    const { postID } = req.body;

    const post = await Post.findById(postID);

    let { likes } = post;
    if (!likes[0]) {
      likes.push(postID);
    } else {
      likes.splice(0, 1);
    }
    await post.save();
    res.json({
      message: `Post succesfully liked`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Can't like post: Something went wrong",
      errors: error.message,
    });
  }
});
module.exports = router;
