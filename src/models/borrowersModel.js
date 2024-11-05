// src/models/borrowersModel.js

const mongoose = require('mongoose');

const borrowerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    borrowedBooks: {
        type: [String], // Menyimpan ID buku yang dipinjam
        default: [],
    }
}, { timestamps: true });

const Borrower = mongoose.model('Borrower', borrowerSchema);

module.exports = Borrower;
