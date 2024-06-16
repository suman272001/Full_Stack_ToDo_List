const mongoose=require("../Connection/connection");
const user=require("./userModel")
const todoSchema=mongoose.Schema(
    {
        text:{
            type:String
        },
        userId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    }
)
module.exports=mongoose.model("todoList",todoSchema);