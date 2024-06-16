const user=require("../Models/userModel");
const userPosts=require("../Models/userData")
const bcrypt=require("bcryptjs");
class Register{
    static registerform=async(req,res)=>{
            try{
        // const firstName=;
        console.log(req.body)
        const body=req.body;
        const emailExistCheck=await user.findOne({email:body.email});
        if(emailExistCheck)
        {
            res.status(400).json({msg:"User already exists"})
        }
        else{
         const salt=bcrypt.genSaltSync(10);
         const hash=bcrypt.hashSync(body.password,salt)
        const data=await user.create({
            firstName:body.firstName,
            lastName:body.lastName,
            email:body.email,
            password:hash
          })
        res.send({msg:"send done"})
        }
            }
            catch(err)
            {
                console.log(err.message);
                res.status(404).send({err:err.message})
            }
    }

    static loginform=async(req,res)=>{
        try{
        const {userName,password}=req.body;
        console.log(userName,password);
        let userdata=await user.findOne({email:userName});
        console.log(userdata);
        if(!userdata)
        {
            res.status(400).json({error:"User doesn't exixt"})
        }
        else{
        console.log(userdata);
        const isMatching=bcrypt.compareSync(password,userdata.password)
        if(isMatching)
        {
            console.log("matching"+userdata._id);
            res.status(200).json({msg:"Login",id:userdata._id})
        }
        else{
            console.log("Doesn't match");
            res.status(400).json({msg:"Password is invalid"})
        }
    }
    }
    catch(err)
    {
        console.log(err);
    }
}
static insert=async(req,res)=>{
    try{
   const body=req.body;
   const id=req.params.id
   console.log(id);
   let postValue=await userPosts.create({
    text:body.text,
    userId:id
   })
   console.log(postValue);
   let userData=await user.find({_id:id})
   console.log(userData);
    await user.findOneAndUpdate(
    { _id:id},
    { $push: { posts:postValue._id } }
  )
//    await userData.save()
   res.status(200).send("Working")
}
catch(err){
    console.log("Not working");
    console.log(err.message);
   res.status(400).send({err:err.message})
}
}
static getAll=async(req,res)=>{
    try{
        console.log("Problem arise");
        const id=req.params.id;
  let data=await user.findOne({_id:id}).populate("posts");
  res.status(200).send(data);
//   console.log(data);
//   if(data.posts)
//   {
//   data=await data.populate("posts")
//   console.log(data);
//   res.status(200).json({data:data})

//   else{
//     res.status(404).json({msg:"no posts"})
//   }

}
catch(err){
   res.status(400).send({err:err.message})
}
}
static delete=async(req,res)=>{
  try{
     const {id,userId}=req.params;
const data=await userPosts.deleteOne({_id:id})
await user.updateOne( { _id:userId }, { $pull: { posts: { $eq: id } } } )
console.log(data);
 res.status(200).json({data})
}
catch(err){
console.log(err.message);
 res.status(400).send({err:err.message})
}
}
static update=async(req,res)=>{
    try{
       const id=req.params.postid;
       const {newVal}=req.body;
       console.log(newVal);
    //    const data=await userPosts.find({_id:id})
  const data=await userPosts.findOneAndUpdate({_id:id},{
    text:newVal
  })
  console.log(data);
   res.status(200).json({data})
  }
  catch(err){
  console.log(err.message);
   res.status(400).send({err:err.message})
  }
  }
}
module.exports=Register;