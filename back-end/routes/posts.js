import express from "express";
import posts from "../controllers/posts.js";

const router = express.Router();

// Create
router.post("/", posts.create);

// Update
router.put("/:id", posts.update);

// Delete
router.delete("/:id", posts._delete);

// Get One Post

// Get All Posts

export default router;
