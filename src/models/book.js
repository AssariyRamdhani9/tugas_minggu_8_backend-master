const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: {  // ID manual
    type: String,
    required: true,
    unique: true,  // pastikan ID unik
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Book || mongoose.model("Book", bookSchema);

