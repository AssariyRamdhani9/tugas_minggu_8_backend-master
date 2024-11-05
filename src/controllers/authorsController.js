// src/controllers/authorsController.js

const Author = require('../models/authorsModel');

// Get all authors
const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find(); // Ambil semua penulis dari database
        res.status(200).json(authors); // Kirim data penulis sebagai respons JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get author by ID
const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id); // Cari penulis berdasarkan ID
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author); // Kirim data penulis sebagai respons JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new author
const createAuthor = async (req, res) => {
    const author = new Author(req.body); // Buat penulis baru dari data yang diterima
    try {
        const savedAuthor = await author.save(); // Simpan penulis ke database
        res.status(201).json(savedAuthor); // Kirim data penulis yang baru dibuat
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an author
const updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update penulis
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author); // Kirim data penulis yang sudah diupdate
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an author
const deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id); // Hapus penulis
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(204).send(); // Kirim respons berhasil tanpa konten
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
};
