const express = require('express')
const router = express.Router()
const Category = require('../models/category')

//create category
router.post('/', async (req, res)=>{
    const newCategory = new Category(req.body)
    try{
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        res.status(500).json(err)
    }
})

// read all categories
router.get('/', (req, res)=>{

})

//read category by id
router.get('/:id', (req, res) => {

})


//update category
router.put('/:id', async (req, res)=>{
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
router.delete('/:id', (req, res)=>{

})

module.exports = router