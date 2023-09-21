const express = require("express");
const app=express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

//   mongoose.connect("mongodb+srv://kambleketan458:ketan1818@cluster0.hqrh2ym.mongodb.net/?retryWrites=true&w=majority")

app.use(cors());
app.get(("/test"),(req,res)=>{
   res.json("tst ok")
});

app.post("/register",(req,res)=>{
    // console.log("jjhjh");
    const {name,email,password,confirmpassword,number,address,city,state,type}=req.body;
    res.json({name,email,password,confirmpassword,number,address,city,state,type});
})

let port = 3001
app.listen(port,()=>{
    console.log("running",port);
})