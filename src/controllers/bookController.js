const Book = require("../models/book");

// Mendapatkan semua buku
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan detail buku berdasarkan ID manual
exports.getBookById = async (req, res) => {
  try {
    // Menggunakan findOne untuk mencari berdasarkan field 'id'
    const book = await Book.findOne({ id: req.params.id });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menambahkan buku baru
exports.createBook = async (req, res) => {
  // Membuat instance Book dengan req.body
  const book = new Book(req.body);
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mengupdate buku berdasarkan ID manual
exports.updateBook = async (req, res) => {
  try {
    // Menggunakan findOneAndUpdate untuk mengupdate berdasarkan field 'id'
    const updatedBook = await Book.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Menghapus buku berdasarkan ID manual
exports.deleteBook = async (req, res) => {
  try {
    // Menggunakan findOneAndDelete untuk menghapus berdasarkan field 'id'
    const deletedBook = await Book.findOneAndDelete({ id: req.params.id });
    if (!deletedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
