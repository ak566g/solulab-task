const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const productSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required: true,
        unique:true
    },
    productName:{
        type:String, 
        required:true
    },
    qtyPerUnit:{
        type:Number,
        default:1
    },
    unitPrice:{
        type:Number, 
        required:true
    },
    unitInStock:{
        type:Number,
        default:1
    },
    discontinued:{
        type:Boolean,
        default:false
    },
    categoryId:{
        type: ObjectId,
        ref: 'Category',
        required:true
    }
}, {timestamps:true})


module.exports = mongoose.model('Product', productSchema)