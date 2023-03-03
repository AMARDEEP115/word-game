const express=require("express");
const cors=require("cors");
require("dotenv").config();

const {connection}=require("./Config/db");
const userRouter = require("./Router/userRouter");
const app=express();

app.use(express.json());

app.use(cors({
    origin:"*"
}));


app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.get("/random",(req,res)=>{
    const ramdomWords=[
        "conclusion","spring","fire","unanimous","anticipation",
        "concert","shaft","front","shine","indication",
        "emotion","peel","systematic","spontaneous","permanent",
        "craftsman","fashionable","inappropriate","teenager","random",
        "adviser","feature","organize","precedent","trivial",
        "accurate","authority","experiment","possibility",
        "appearance","consumption","army","distort",
        "push","temporary","cooperative","flat","subtract",
        "insect","bedroom","increase","territory","star",
        "royal","valuable","complex","graceful","kind"
    ];
    res.send({"words":ramdomWords});
});

app.use("/game",userRouter);

app.listen(process.env.port || 3000,async()=>{
    try{
        await connection;
        console.log("Connected to DB");
        console.log(`server is running at port ${process.env.port || 3000}`);
    } catch(err){
        console.log(err);
        console.log("Not connected to DB");
        console.log(`server is running at port ${process.env.port || 3000}`);
    }
});