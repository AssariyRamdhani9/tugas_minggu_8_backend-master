// src/controllers/categoriesController.js

const Category = require('../models/categoriesModel');

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find(); // Ambil semua kategori dari database
        res.status(200).json(categories); // Kirim data kategori sebagai respons JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get category by ID
const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id); // Cari kategori berdasarkan ID
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category); // Kirim data kategori sebagai respons JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new category
const createCategory = async (req, res) => {
    const category = new Category(req.body); // Buat kategori baru dari data yang diterima
    try {
        const savedCategory = await category.save(); // Simpan kategori ke database
        res.status(201).json(savedCategory); // Kirim data kategori yang baru dibuat
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a category
const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update kategori
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category); // Kirim data kategori yang sudah diupdate
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a category
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id); // Hapus kategori
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(204).send(); // Kirim respons berhasil tanpa konten
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
