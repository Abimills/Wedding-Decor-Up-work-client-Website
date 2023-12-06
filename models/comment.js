import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema(
  {
    name: String,
    email: String,
    comment: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", commentsSchema);

export default Comments;
