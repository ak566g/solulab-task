const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const mongoose = require('mongoose')

//create product
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body)
    
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

// read all products
router.get('/', (req, res)=>{

})

//read product by id
router.get('/:id', (req, res) => {

})

//update product
router.put('/', (req, res)=>{
    
})

// delete product by id
router.delete('/:id', (req, res)=>{

})

module.exports = router