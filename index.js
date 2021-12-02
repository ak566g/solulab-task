const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

const productRoutes = require('./routes/product')
const categoryRoutes = require('./routes/category')


const port = process.env.PORT || 8000

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log("db connection successful")
})
.catch((err)=>{
    console.log(err)
})

app.use('/api/product', productRoutes)
app.use('/api/category', categoryRoutes)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})