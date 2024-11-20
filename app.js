const express = require("express");
const postLib = require("./post");
const {
  getPosts,
  viewPost,
  createPost,
  deleteLatestPost,
  deletePost,
  updatePost,
} = postLib;

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  const posts = getPosts();
  res.send(posts.map((post) => viewPost(post)).join("<br/>"));
});

app.post("/post", (req, res) => {
  createPost(req.body);
  res.send(`OK`);
});

app.delete("/post", (req, res) => {
  deleteLatestPost();
  res.send(`OK`);
});

app.patch("/post/:postIndex", (req, res) => {
  const { postIndex } = req.params;
  const post = req.body;
  updatePost(postIndex, post);
  res.send(`OK`);
});

app.delete("/post/:postIndex", (req, res) => {
  const { postIndex } = req.params;
  deletePost(Number(postIndex));
  res.send(`OK`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
