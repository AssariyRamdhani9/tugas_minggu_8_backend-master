// src/controllers/borrowersController.js

const Borrower = require('../models/borrowersModel');

// Get all borrowers
const getAllBorrowers = async (req, res) => {
    try {
        const borrowers = await Borrower.find(); // Ambil semua peminjam dari database
        res.status(200).json(borrowers); // Kirim data peminjam sebagai respons JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get borrower by ID
const getBorrowerById = async (req, res) => {
    try {
        const borrower = await Borrower.findById(req.params.id); // Cari peminjam berdasarkan ID
        if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
        res.status(200).json(borrower); // Kirim data peminjam sebagai respons JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new borrower
const createBorrower = async (req, res) => {
    const borrower = new Borrower(req.body); // Buat peminjam baru dari data yang diterima
    try {
        const savedBorrower = await borrower.save(); // Simpan peminjam ke database
        res.status(201).json(savedBorrower); // Kirim data peminjam yang baru dibuat
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a borrower
const updateBorrower = async (req, res) => {
    try {
        const borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update peminjam
        if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
        res.status(200).json(borrower); // Kirim data peminjam yang sudah diupdate
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a borrower
const deleteBorrower = async (req, res) => {
    try {
        const borrower = await Borrower.findByIdAndDelete(req.params.id); // Hapus peminjam
        if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
        res.status(204).send(); // Kirim respons berhasil tanpa konten
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBorrowers,
    getBorrowerById,
    createBorrower,
    updateBorrower,
    deleteBorrower,
};
