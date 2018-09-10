const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "wfeerwwe23",
      title: "First post",
      content: "Thist is test first post"
    },
    {
      id: "wfe4234s23",
      title: "Second post",
      content: "Thist is test second post"
    }
  ];
  res.status(200).json({
    message: "Post fetched succesfully!",
    posts: posts
  });
});

module.exports = app;
