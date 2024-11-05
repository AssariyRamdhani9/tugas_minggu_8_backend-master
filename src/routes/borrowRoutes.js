const express = require("express");
const { borrowBook, returnBook, getActiveBorrows } = require("../controllers/borrowController");

const router = express.Router();

// Endpoint untuk meminjam buku
router.post("/borrow/book", borrowBook);

// Endpoint untuk mengembalikan buku
router.post("/borrow/book/return/:id", returnBook);

// Endpoint untuk melihat daftar peminjaman aktif
router.get("/borrow/book/list", getActiveBorrows);

module.exports = router;
