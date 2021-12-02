const express = require('express')
const category = require('../models/category')
const router = express.Router()
const Category = require('../models/category')

//create category
router.post('/create', async (req, res)=>{
    const newCategory = new Category(req.body)
    try{
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        res.status(500).json(err)
    }
})

// read all categories
router.get('/readAll', (req, res)=>{
    Category.find({}, (err, categories) => {
        var categoryMap = {}

        categories.forEach(category => {
            categoryMap[category._id] = category
        })
        res.send(categoryMap)
    })
})

//read category by id
router.get('/read', (req, res) => {

})


//update category
router.put('update', async (req, res)=>{
    try{
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,{
                $set: req.body
            },
            {new:true}
        )
        res.status(200).json(updatedCategory)
    }catch(err){
        res.status(500).json(err)
    }
})

//delete category
router.delete('/delete', (req, res)=>{

})

module.exports = router