import express from "express";
import auth from "../controllers/auth.js";

const router = express.Router();

// Register
router.post("/register", auth.register);

// Login
router.post("/login", auth.login);

export default router;
