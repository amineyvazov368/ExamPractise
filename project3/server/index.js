const express = require('express')
const bodyParser = require('body-parser')
const cors=require("cors")
const mongoose = require('mongoose');
const app = express()
app.use(bodyParser.json())
app.use(cors())
const PORT = 5050;

const ProductSchema= new mongoose.Schema({
    title:String,
    img:String,
    Price:String,
    discription:String
})
const ProductModel=mongoose.model("Foot",ProductSchema)
app.get("/api/products",async(req,res)=>{
    const { title }=req.query
    let products
    if(title) products=await ProductModel.find({title:title})
    else products=await ProductModel.find()
if(products.length>0){
    res.send({products})
}else{
    res.send({
        message:"not found",
        data:null
    })
}
}),

// id
app.get('/api/products/:id',async(req,res)=>{
    const {id}=req.params
    let products
    try {
        products=await ProductModel.findById(id);
    } catch (error) {
        res.send({error:error})
    }
    if(products){
        res.send({
            message:"success",
            data:products
           })
    
       }else{
        res.send({
            message:"not found",
            data:null,
        })
       }
    }
),
app.post("/api/products",async(req,res)=>{
    const products=new ProductModel(req.body)
    await products.save()
    res.send({
        message:"posted",
        data:products
    })
})
app.delete('/api/products/:id',async(req,res)=>{
    const { id }=req.params
    let response
    try {
        response=await ProductModel.findByIdAndDelete(id)
    } catch (error) {
        res.send({
            error:error
        })
    }
    res.send({
        message:"delete",
        data:response
    })
})
app.patch("/api/products/:id",async(req,res)=>{
    const {id}=req.params
   response=await ProductModel.findByIdAndUpdate(id,req.body)
   res.send({
    message:"update",
    data:response
   })


})
mongoose.connect('mongodb+srv://amineyvazov:aminamin@project2.ws3s31d.mongodb.net/?retryWrites=true&w=majority&appName=project2').
then(()=>console.log("Connected!"))


app.listen(PORT,()=>{
    console.log(`Server listening on Port ${PORT}`);
  }
)