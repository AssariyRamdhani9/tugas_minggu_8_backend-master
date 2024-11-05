// src/routes/authors.js

const express = require('express');
const { 
    getAllAuthors, 
    getAuthorById, 
    createAuthor, 
    updateAuthor, 
    deleteAuthor 
} = require('../controllers/authorsController');

const router = express.Router();

// Define routes for authors
router.get('/authors', getAllAuthors);
router.get('/author/:id', getAuthorById);
router.post('/author', createAuthor);
router.put('/author/:id', updateAuthor);
router.delete('/author/:id', deleteAuthor);

module.exports = router;
