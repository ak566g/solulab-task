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
router.post('/read', (req, res) => {
    Product.findOne({productId : req.body.productId}, (err, product) => {
        if(err){
            res.status(500).json(err)
        }
        res.send(product)
    })
})

//update product
router.put('/update', (req, res)=>{
    if(!req.body.productId){
        
        res.status(400).json({
            error:"Product Id is required"
        })
    }

    Product.findOneAndUpdate({productId:req.body.productId}, req.body, {
        new:true
    }, (err, product) => {
        if(err){
            res.status(400).json(err)
        }
        res.send(product)
    })

})

// delete product by id
router.post('/delete', (req, res)=>{
    Product.findOneAndDelete(req.body, (err, product) => {
        if(err){
            res.status(400).json({
                error:"Product cannot be found"
            })
        }

        res.send(product)
    })
})

module.exports = router