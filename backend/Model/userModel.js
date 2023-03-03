const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name: String,
    level: String,
    correct: Number,
    worng: Number,
    score: Number,
    attempt: Number
});

const userModel=mongoose.model("player",userSchema);

module.exports=userModel;