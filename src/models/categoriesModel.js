// src/models/categoriesModel.js

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    jumlahBuku: {
        type: String,
        required: false,
    },
    subKategori: {
        type: String,
        required: false,
    }
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
