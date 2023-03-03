const { Router } = require("express");
const userModel = require("../Model/userModel");

const userRouter=Router();

userRouter.post("/add",async(req,res)=>{
    let data=req.body;
    let resp=new userModel(data);
    await resp.save();
    res.send("Score id Saved");
});

userRouter.get("/",async(req,res)=>{
    let data=await userModel.find();
    data=data.sort((a,b)=>b.score-a.score);
    res.send({"players":data});
});

module.exports=userRouter;