import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    name: String,
    email: String,
    phoneNumber: Number,
    city: String,
    place: String,
    eventType: String,
    eventDate: Date,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
