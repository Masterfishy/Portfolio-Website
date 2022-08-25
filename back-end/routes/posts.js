import express from "express";
import posts from "../controllers/posts.js";

const router = express.Router();

// Create
router.post("/", posts.create);

// Update

// Delete

// Get One Post

// Get All Posts

export default router;
