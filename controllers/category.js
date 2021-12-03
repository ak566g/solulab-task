const Category = require('../models/category')

exports.createCategory = async (req, res)=>{
    const newCategory = new Category(req.body)
    try{
        const savedCategory =await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.readAllCategory = (req, res)=>{
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
}

exports.readCategoryById = (req, res) => {
    Category.findOne({categoryId: req.body.categoryId}, (err, category) => {
        if(err){
            res.status(500).json(err)
        }
        res.send(category)
    })
}

exports.updateCategory = (req, res)=>{

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

}