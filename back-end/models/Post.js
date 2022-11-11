import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);