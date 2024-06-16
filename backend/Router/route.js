const express=require("express");
const r1=require("../controllers/formPost")
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("abcdefghijklmnopqrstuvwxyz")
})
// router.get("/login",(req,res)=>{
//     res.send("abcdefghijklmnopqrstuvwxyz")
// })

router.post("/register",r1.registerform)
router.post("/login",r1.loginform)
router.get("/getall/:id",r1.getAll)
router.post("/insert/:id",r1.insert)
router.delete("/delete/:id/:userId",r1.delete)
router.put("/update/:postid",r1.update)
module.exports=router