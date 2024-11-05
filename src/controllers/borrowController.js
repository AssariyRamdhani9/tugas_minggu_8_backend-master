const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

// Peminjaman buku baru
const borrowBook = async (req, res) => {
  try {
    const { bookId, borrowerId } = req.body;
    
    // Mengurangi stok buku
    const book = await Book.findById(bookId);
    if (!book || book.stock <= 0) {
      return res.status(400).json({ message: "Buku tidak tersedia" });
    }
    book.stock -= 1;
    await book.save();
    
    // Mencatat peminjaman
    const borrow = new Borrow({ bookId, borrowerId });
    await borrow.save();
    res.status(201).json({ message: "Buku berhasil dipinjam", borrow });
  } catch (error) {
    res.status(500).json({ message: "Gagal meminjam buku", error });
  }
};

// Pengembalian buku
const returnBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { returnDate, fine } = req.body;

    // Memperbarui status peminjaman
    const borrow = await Borrow.findById(id);
    if (!borrow || borrow.isReturned) {
      return res.status(400).json({ message: "Data peminjaman tidak valid atau sudah dikembalikan" });
    }
    borrow.returnDate = returnDate || Date.now();
    borrow.isReturned = true;
    borrow.fine = fine || 0;
    await borrow.save();

    // Menambah stok buku kembali
    const book = await Book.findById(borrow.bookId);
    book.stock += 1;
    await book.save();

    res.status(200).json({ message: "Buku berhasil dikembalikan", borrow });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengembalikan buku", error });
  }
};

// Mendapatkan daftar peminjaman aktif
const getActiveBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.find({ isReturned: false }).populate("bookId borrowerId");
    res.status(200).json(borrows);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data peminjaman", error });
  }
};

module.exports = {
  borrowBook,
  returnBook,
  getActiveBorrows,
};
