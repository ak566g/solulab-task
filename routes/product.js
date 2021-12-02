const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const mongoose = require('mongoose')

//create product
router.post('/create', async (req, res) => {
    const newProduct = new Product(req.body)
    
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

// read all products
router.get('/readAll', (req, res)=>{
    Product.find({}, (err, products)=> {
        if(err){
            res.json(500).json(err)
        }

        var productMap = {}

        products.forEach(product =>{
            productMap[product._id] = product
        })

        res.send(productMap)
    })
})

//read product by id
router.get('/read', (req, res) => {
    
})

//update product
router.put('/update', (req, res)=>{
    
})

// delete product by id
router.delete('/delete', (req, res)=>{

})

module.exports = router