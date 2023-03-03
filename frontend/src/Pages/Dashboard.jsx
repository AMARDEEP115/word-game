import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPlayers } from "../Redux/Player/action";
import {IoHome} from "react-icons/io5";
import {AiOutlineArrowLeft} from "react-icons/ai";
import "./Dsah.css";

const Dashboard=(theme)=>{
    const dispatch=useDispatch();
    const players=useSelector(store=>store.PlayerReducer.players) || [];
    useEffect(()=>{
        dispatch(getPlayers());
    },[]);
    return <div id="Dsh">
        <Link to="/" id="DshA"><AiOutlineArrowLeft  color="blue" size="30px"/><IoHome color={theme.theme.theme?"white":"black"} size="40px"/></Link>
        <div id="Players">
            {players.map((el,index)=><div key={index} style={{border:theme.theme.theme?"2px solid white":"none"}}>
                {index===0 && <h3 style={{marginLeft:"40%",color:"red"}}>First</h3>}
                {index===1 && <h3 style={{marginLeft:"40%",color:"red"}}>Second</h3>}
                {index===2 && <h3 style={{marginLeft:"40%",color:"red"}}>Third</h3>}
                <h3>Name: <span>{el.name}</span></h3>
                <h3>Score: <span>{el.score}</span></h3>
                <h3>level: <span>{el.level}</span></h3>
            </div>)}
        </div>
    </div>
};

export default Dashboard;