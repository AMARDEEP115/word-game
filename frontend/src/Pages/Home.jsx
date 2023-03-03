import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { settPlayer } from "../Redux/Player/action";
import "./Homee.css";

const intialState={
    name:"",
    level:""
}

const Home=(theme)=>{
    const [player,setPlayer]=React.useState(intialState);
    const Navi=useNavigate();
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(player.name!=="" && player.level!==""){
            dispatch(settPlayer(player));
            return Navi("/playzone");
        } else {
            alert("Please Enter All Fields");
        }
    }
    return  <div id="Hoo">
        <button id="AALL" style={{border:theme.theme.theme?"2px solid white":"2px solid black",backgroundColor:theme.theme.theme?"black":"white",color:theme.theme.theme?"white":"black"}} onClick={()=>{
            return Navi("/dashboard");
        }}>ALL SCORES</button>
        <h1>Test your typing speed online</h1>
        <h1>The faster you type, the faster you communicate with others. With our free typing speed test</h1>
        <div id="Home" style={{border:theme.theme.theme?"2px solid white":"none"}}>
            <form id="Form" onSubmit={(e)=>handleSubmit(e)}>
                <h2 style={{color:theme.theme.theme?"white":"black"}}>Name</h2>
                <input value={player.name} type="text" placeholder="Enter Your Name"  onChange={(e)=>setPlayer({...player,name:e.target.value})}  style={{color:theme.theme.theme?"white":"black",backgroundColor:theme.theme.theme?"black":"white"}} />
                <div>
                    <h2 style={{color:theme.theme.theme?"white":"black"}}>Select Level</h2>
                    <select value={player.level} onChange={(e)=>setPlayer({...player,level:e.target.value})} style={{backgroundColor:theme.theme.theme?"black":"white"}}>
                        <option value="">--select--</option>
                        <option value="low">LOW</option>
                        <option value="med">MEDIUM</option>
                        <option value="high">HIGH</option>
                    </select>
                    <button type="submit">Start</button>
                </div>
            </form>
        </div>
    </div>
};

export default Home;