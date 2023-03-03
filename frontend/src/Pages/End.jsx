import { Link, useNavigate } from "react-router-dom";
import {IoHome} from "react-icons/io5";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {FiRefreshCcw} from "react-icons/fi";
import "./Endd.css";
import Keyboard from "../Components/Keyboard";
import { useSelector } from "react-redux";

const End=(theme)=>{
    const store=useSelector(store=>store.PlayerReducer);
    const Navi=useNavigate();

    let lev="";
    if(store.level=="low"){
        lev="Low";
    } else if(store.level=="med"){
        lev="Medium";
    } else {
        lev="High";
    }
    const obj={
        name:store.name,
        level:lev,
        correct:store.correct,
        worng:store.worng,
        score:store.score,
        attempt:store.attempt
    };

    const saveData=async()=>{
        let id=setTimeout(()=>{
            clearTimeout(id);
            return Navi("/dashboard");
        },200);
        let res=await fetch("http://localhost:8080/game/add",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            }
        });
    }

    return <div>
        <div id="Nav">
            <Link to="/"><AiOutlineArrowLeft  color="blue" size="5vh"/><IoHome color={theme.theme.theme?"white":"black"} size="40px"/></Link>
            <Link to="/playzone" style={{color:theme.theme.theme?"white":"black"}}>TRY AGAIN<FiRefreshCcw color={theme.theme.theme?"white":"black"} size="40px"/></Link>
        </div>
        <div id="Ed">
            <img src="https://www.ratatype.com/static/i/dialogs/welcome/course.gif" alt="gif" />
            <div id="End" style={{border:theme?"1px solid white":"1px solid white"}}>
                <h1>name :    <span>{store.name}</span></h1>
                <h1>level :   <span>{lev}</span></h1>
                <h1>correct : <span>{store.correct}</span></h1>
                <h1>worng :   <span>{store.worng}</span></h1>
                <h1>score :   <span>{store.score}</span></h1>
                <h1>attempt : <span>{store.attempt}</span></h1>
                <button onClick={()=>saveData()}>ALL SCORES</button>
            </div>
        </div>
    </div>
}

export default End;