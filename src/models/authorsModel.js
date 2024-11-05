// src/models/authorsModel.js

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: false,
    },
    pekerjaan: {
        type: String,
        required: false,
    },
    tanggalLahir: {
        type: Date,
        required: false,
    },
}, { timestamps: true });

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
