const Product = require('../models/product')

exports.getAllproducts = async (req, res) => {
    try {
      let response = await Product.find();
      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.readProductById = (req, res) => {
    Product.findOne({productId : req.body.productId}, (err, product) => {
        if(err){
            res.status(500).json(err)
        }
        res.send(product)
    })
}

exports.updateProduct = (req, res)=>{
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

}

exports.deleteProduct = (req, res)=>{
    Product.findOneAndDelete(req.body, (err, product) => {
        if(err){
            res.status(400).json({
                error:"Product cannot be found"
            })
        }

        res.send(product)
    })
}