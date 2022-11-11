import Post from "../models/Post.js";

/**
 * POST / route to create a new post.
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

/**
 * PUT /:id route to update a post.
 * @param {*} req The request object
 * @param {*} res The response object
 */
async function update(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(`Could not update the post! ${err.message}`);
  }
}

/**
 * DELETE /:id route to delete a post.
 * @param {*} req The request object
 * @param {*} res The response object
 */
async function _delete(req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json("Post has been deleted.");
  } catch (err) {
    res.status(500).json(`Failed to delete post! ${err.message}`);
  }
}

export default { create, update, _delete };
