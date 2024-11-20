// {title, description}
const posts = [];

function createPost(post) {
  posts.push(post);
}

function getPosts() {
  return posts;
}

function deleteLatestPost() {
  posts.pop();
}

function deletePost(postIndex) {
  posts.splice(postIndex, 1);
}

function updatePost(postIndex, newPost) {
  posts[postIndex] = { ...posts[postIndex], ...newPost };
}

function viewPost(post) {
  return `<div>
<h1>${post.title}</h1>
<p>${post.description}</p>
</div>`;
}

module.exports = {
  deleteLatestPost,
  deletePost,
  viewPost,
  getPosts,
  createPost,
  updatePost,
};
