const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/authenication")
.then(()=>{
    console.log("mongo connected");
})

.catch(()=>{
    console.log("failed");
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("Collection1",LoginSchema)

module.exports=collection
