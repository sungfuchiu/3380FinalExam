const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const todoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description:  { type: String },
}, { collection: '300371200-sungfu' });

const Book = mongoose.model("Book", todoSchema);
module.exports = Book;