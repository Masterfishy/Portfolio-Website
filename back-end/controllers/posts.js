import Post from "../models/Post.js";

/**
 * PoST / route to create a new post.
 * @param {*} req The request object
 * @param {*} res The response object
 */
async function create(req, res) {
  const newPost = new Post(req.body);
  try {
    const post = await newPost.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(`Could not create post! ${err.message}`);
  }
}

export default { create };
