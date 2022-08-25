import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DB_URI
    : process.env.DB_URI;

const app = express();

// Connect to the database
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to database successful."))
  .catch((err) => console.log(`Error connecting to database! ${err.message}`));

// Set how the app parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

export { app };
