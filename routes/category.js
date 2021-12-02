const express = require('express')
const router = express.Router()
const Category = require('../models/category')

//create category
router.post('/create', (req, res)=>{
    const newCategory = new Category(req.body)
    try{
        newCategory.save()
        res.status(200).json(newCategory)
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
router.delete('/delete', (req, res)=>{

})

module.exports = router