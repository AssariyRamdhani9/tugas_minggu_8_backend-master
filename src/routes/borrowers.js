// src/routes/borrowers.js

const express = require('express');
const { 
    getAllBorrowers, 
    getBorrowerById, 
    createBorrower, 
    updateBorrower, 
    deleteBorrower 
} = require('../controllers/borrowersController');

const router = express.Router();

// Define routes for borrowers
router.get('/borrowers', getAllBorrowers);
router.get('/borrower/:id', getBorrowerById);
router.post('/borrower', createBorrower);
router.put('/borrower/:id', updateBorrower);
router.delete('/borrower/:id', deleteBorrower);

module.exports = router;
