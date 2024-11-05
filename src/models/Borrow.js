const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  borrowerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Borrower",
    required: true,
  },
  borrowDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    required: false,
  },
  isReturned: {
    type: Boolean,
    default: false,
  },
  fine: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model("Borrow", borrowSchema);
