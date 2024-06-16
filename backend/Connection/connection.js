const mongoose=require("mongoose");
(
    async()=>{
      await mongoose.connect("mongodb+srv://CodewithSuman:B0fQJgX9qKVvwkvF@cluster.vyi8fxv.mongodb.net/todolist")
    }
)().then(()=>{
console.log("Database connection is done");
})
.catch((err)=>{
    console.log("Database connection is not successful beacause error occured"+err.message);
})
Promise.resolve().then(()=>{
  console.log(1)
})
console.log(2);
module.exports=mongoose;