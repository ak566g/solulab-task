const express = require('express')
const router = express.Router()
const { getAllproducts, createProduct, readProductById, updateProduct, deleteProduct } = require('../controllers/product')


//create product
router.post('/create', createProduct)

// read all products
router.get('/readAll', getAllproducts)

//read product by id
router.post('/read', readProductById)

//update product
router.post('/update', updateProduct)

// delete product by id
router.post('/delete', deleteProduct)

module.exports = router