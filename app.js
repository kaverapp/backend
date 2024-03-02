const express=require("express");
const env=require("dotenv").config();
const app=express();
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on port${port}`)
});

//get request  
app.get("/",(req,res)=>{
    res.send("hello this is kaverappa")
});