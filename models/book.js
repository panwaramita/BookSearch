const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  imageurl: { type: String },
  link: { type: String},
});

const Book = mongoose.model("GoogleBook", bookSchema);

module.exports = Book;

