const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  imageurl: { type: String, required: true },
  link: { type: String, required: true },
});

const Book = mongoose.model("GoogleBook", bookSchema);

module.exports = Book;

