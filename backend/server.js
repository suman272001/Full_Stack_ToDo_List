const express=require("express");
const route=require("./Router/route");
const cors=require("cors");
const app=express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(route);
app.listen(4000,()=>{
    console.log("Server is listening");
})