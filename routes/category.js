const express = require('express')
const { createCategory, readAllCategory, readCategoryById, updateCategory } = require('../controllers/category')
const router = express.Router()
const Category = require('../models/category')

// create new category
router.post('/create', createCategory)

// read all categories
router.get('/readAll', readAllCategory)

//read category by id
router.post('/read', readCategoryById)


//update category
router.post('/update', updateCategory)

module.exports = router