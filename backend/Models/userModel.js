const mongoose=require("../Connection/connection");
const userSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"todoList"
    }]
})
const user=mongoose.model("user",userSchema)
module.exports=user;