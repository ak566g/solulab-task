const express = require('express')
const router = express.Router()
const Category = require('../models/category')
const Product = require('../models/product')
//create category
router.post('/create', async (req, res)=>{
    const newCategory = new Category(req.body)
    try{
        const savedCategory =await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        res.status(500).json(err)
    }
})

// read all categories
router.get('/readAll', (req, res)=>{
    Category.find({}, (err, categories) => {

        if(err){
            res.status(500).json(err)
        }

        var categoryMap = {}

        categories.forEach(category => {
            categoryMap[category._id] = category
        })
        res.send(categoryMap)
    })
})

//read category by id
router.post('/read', (req, res) => {
    Category.findOne({categoryId: req.body.categoryId}, (err, category) => {
        if(err){
            res.status(500).json(err)
        }
        res.send(category)
    })
})


//update category
router.post('/update', (req, res)=>{

    if(!req.body.categoryId){
        res.status(400).json({
            error:"Category Id is required"
        })
    }

    Category.findOneAndUpdate({categoryId: req.body.categoryId}, req.body, {
        new: true
    }, (err, category) => {
        if(err){
            res.status(500).json(err)
        }
        res.send(category)
    })

})

//delete category
router.post('/delete', (req, res)=>{
    const category = Category.findOne({categoryId:req.body.categoryId})
    if(!category){
        res.status(400).json({
            error:"Category does not exist"
        })
    }

    Product.findOneAndDelete({categoryId: category._id})
    Category.findOneAndDelete(req.body, (err, category) => {
        if(err){
            res.status(400).json({
                error:"category cannot be found"
            })
        res.send(category)
    })
})

module.exports = router