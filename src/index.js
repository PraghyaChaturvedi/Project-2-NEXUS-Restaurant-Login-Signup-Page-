
const express= require("express");
const app=express();
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const templetsPath=path.join(__dirname,'../templets')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templetsPath)
app.use(express.urlencoded({extended:false}))


app.use('/images',express.static('images'))

app.listen(3000,()=>{
    console.log("port ");
});

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

//signup
app.post("/signup",async (req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password,
        // email:req.body.email
    }

    await collection.insertMany([data])

    res.render("home")
})

//login
app.post("/login",async (req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        }

        else{
            res.send("Wrong Password")
        }
        
    }

    catch{
           res.send("Wrong Detail")
    }
})

