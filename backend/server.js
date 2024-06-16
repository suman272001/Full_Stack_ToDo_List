const express=require("express");
const route=require("./Router/route");
const cors=require("cors");
const app=express();
app.use(cors({
    origin:["https://full-stack-to-do-list-api.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(route);
app.listen(4000,()=>{
    console.log("Server is listening");
})
