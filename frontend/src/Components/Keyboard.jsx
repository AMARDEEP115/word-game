import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import End from "../Pages/End";
import getRandomWords from "../Redux/RandomWords/action";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
import {FaGlobe} from "react-icons/fa";
import "./Keyboardd.css";
import { settPlayerResult } from "../Redux/Player/action";
import { useNavigate } from "react-router-dom";

let xy;
let yx;

const intialResult={
    name:"",
    level:"",
    correct:0,
    worng:0,
    score:0,
    attempt:0
}

const Keyboard=(theme)=>{
    const [char,setChar]=React.useState("");
    const name=useSelector(store=>store.PlayerReducer.name);
    const level=useSelector(store=>store.PlayerReducer.level);
    const [nam,setNam]=React.useState(name);
    const [lev,setLev]=React.useState(level);
    const [tim,setTim]=React.useState(10);
    const [score,setScore]=React.useState(0);
    const [cor,setCor]=React.useState(0);
    const [atm,setAtm]=React.useState(0);
    const words=useSelector(store=>store.WordsReducer.words) || [];
    const [results,setResults]=React.useState(intialResult);
    const [ind,setInd]=React.useState(Math.floor(Math.random()*words.length));
    const [cap,setCap]=React.useState(false);
    const [end,setEnd]=React.useState(0);
    const dispatch=useDispatch();
    const Navi=useNavigate();

    const Remove=()=>{
        let str=char.split("");
        str.pop();
        let ch=str.join("");
        setChar(ch);
        if(char.length===0){
            setChar("");
        }
    }
    const handleInput=(e)=>{
        if(cap){
            let str=e.toUpperCase();
            setChar(pre=>pre+str);
        } else {
            let str=e;
            setChar(pre=>pre+str);
        }
    }
    const handleNext=()=>{
        let str1=words[ind];
        let str2=char;
        if(str1.length===str2.length){
            let cha=0;
            for(let i=0;i<str1.length;i++){
                if(str1[i]!==str2[i]){
                    let s=str1.length;
                    if(score>0){
                        if((score-s)>0){
                            setScore(pre=>pre-s);
                        } else {
                            setScore(0);
                        }
                    }
                    cha=1;
                }
            }
            if(cha===0){
                let s=str1.length;
                setCor(pre=>pre+1);
                setScore(pre=>pre+s);
            }
        } else {
            let s=str1.length;
            if(score>0){
                if((score-s)>0){
                    setScore(pre=>pre-s);
                } else {
                    setScore(0);
                }
            }
        }
        words[ind]="";
        setInd(Math.floor(Math.random()*words.length));
        setAtm(pre=>pre+1);
        setChar("");
    }

    if(tim===1){
        clearInterval(xy);
        yx=setTimeout(()=>{
            setTim(0);
            clearTimeout(yx);
            setResults({...results,name:nam,level:lev,score:score,correct:cor,worng:(atm-cor),attempt:(atm)});
            dispatch(settPlayerResult({score:score,correct:cor,worng:(atm-cor),attempt:(atm)}));
            return Navi("/end");
        },1000);
    }

    useEffect(()=>{
        dispatch(getRandomWords());
        if(tim!==0){
            xy=setInterval(()=>{
                setTim(pre=>pre-1);
            },1000);
        }
        if(level==="low"){
            setTim(30);
        } else if(level==="med"){
            setTim(20);
        } else if(level==="high"){
            setTim(10);
        }
    },[end]);

    return <div>
        <button id="Restrt" style={{display:"block",marginLeft:"30px",padding:"10px",border:theme.theme.theme?"2px solid white":"2px solid black",backgroundColor:theme.theme.theme?"black":"white",color:theme.theme.theme?"white":"black"}} onClick={()=>{
            if(level==="low"){
                setTim(30);
            } else if(level==="med"){
                setTim(20);
            } else if(level==="high"){
                setTim(10);
            } else {
                setTim(15);
            }
            console.log("sdgdsfkgnkdsng");
            console.log(level);
            clearTimeout(xy);
            clearTimeout(yx);
            setCor(0);
            setAtm(0);
            setScore(0);
            setInd(Math.floor(Math.random()*words.length));
            setEnd(pre=>pre+1);
        }}>RESTART</button>
        <div id="WorTim">
            <h1 style={{color:theme.theme.theme?"white":"black"}} id="WorDs">{words[ind]===""?setInd(Math.floor(Math.random()*words.length)):words[ind]}</h1><h1 id="Timeee" style={{color:tim<7?"red":"green"}}>TIME : {tim}</h1>
        </div>
        <div id="Subb">
            <input id="Inp" value={char} type="text" onChange={(e)=>setChar(e.target.value)} style={{border:"1px solid teal",color:theme.theme.theme?"white":"black",backgroundColor:theme.theme.theme?"black":"white"}}/>
            <button onClick={handleNext} id="NextBtn">SUBMIT</button>
        </div>
        <div id="Key" style={{border:theme.theme.theme?"1px solid aqua":"none"}}>
            <div>
                <button onClick={()=>handleInput("~")} className="btnKey">~</button>
                <button onClick={()=>handleInput("1")} className="btnKey">1</button>
                <button onClick={()=>handleInput("2")} className="btnKey">2</button>
                <button onClick={()=>handleInput("3")} className="btnKey">3</button>
                <button onClick={()=>handleInput("4")} className="btnKey">4</button>
                <button onClick={()=>handleInput("5")} className="btnKey">5</button>
                <button onClick={()=>handleInput("6")} className="btnKey">6</button>
                <button onClick={()=>handleInput("7")} className="btnKey">7</button>
                <button onClick={()=>handleInput("8")} className="btnKey">8</button>
                <button onClick={()=>handleInput("9")} className="btnKey">9</button>
                <button onClick={()=>handleInput("0")} className="btnKey">0</button>
                <button onClick={Remove} className="btnKey">delete</button>
            </div>
            <div>
                <button onClick={()=>handleInput("  ")} className="btnKey">tab</button>
                <button onClick={()=>handleInput("q")} className="btnKey">Q</button>
                <button onClick={()=>handleInput("w")} className="btnKey">W</button>
                <button onClick={()=>handleInput("e")} className="btnKey">E</button>
                <button onClick={()=>handleInput("r")} className="btnKey">R</button>
                <button onClick={()=>handleInput("t")} className="btnKey">T</button>
                <button onClick={()=>handleInput("y")} className="btnKey">Y</button>
                <button onClick={()=>handleInput("u")} className="btnKey">U</button>
                <button onClick={()=>handleInput("i")} className="btnKey">I</button>
                <button onClick={()=>handleInput("o")} className="btnKey">O</button>
                <button onClick={()=>handleInput("p")} className="btnKey">P</button>
                <button onClick={()=>handleInput("/")} className="btnKey">\</button>
            </div>
            <div>
                <button onClick={()=>setCap(!cap)} className="btnKey">caps</button>
                <button onClick={()=>handleInput("a")} className="btnKey">A</button>
                <button onClick={()=>handleInput("s")} className="btnKey">S</button>
                <button onClick={()=>handleInput("d")} className="btnKey">D</button>
                <button onClick={()=>handleInput("f")} className="btnKey">F</button>
                <button onClick={()=>handleInput("g")} className="btnKey">G</button>
                <button onClick={()=>handleInput("h")} className="btnKey">H</button>
                <button onClick={()=>handleInput("j")} className="btnKey">J</button>
                <button onClick={()=>handleInput("k")} className="btnKey">K</button>
                <button onClick={()=>handleInput("l")} className="btnKey">L</button>
                <button onClick={()=>handleInput("\n")} className="EnSh">Enter</button>
            </div>
            <div>
                <button onClick={()=>handleInput("")} className="btnKey">Shift</button>
                <button onClick={()=>handleInput("z")} className="btnKey">Z</button>
                <button onClick={()=>handleInput("x")} className="btnKey">X</button>
                <button onClick={()=>handleInput("c")} className="btnKey">C</button>
                <button onClick={()=>handleInput("v")} className="btnKey">V</button>
                <button onClick={()=>handleInput("b")} className="btnKey">B</button>
                <button onClick={()=>handleInput("n")} className="btnKey">N</button>
                <button onClick={()=>handleInput("m")} className="btnKey">M</button>
                <button onClick={()=>handleInput("<")} className="btnKey">{`${"<"}`}</button>
                <button onClick={()=>handleInput(">")} className="btnKey">{`${">"}`}</button>
                <button onClick={()=>handleInput("")} className="EnSh">Shift</button>
            </div>
            <div>
                <button onClick={()=>console.log("web")} className="btnKey"><FaGlobe/></button>
                <button onClick={()=>console.log("control")} className="btnKey">control</button>
                <button onClick={()=>console.log("option")} className="btnKey">option</button>
                <button onClick={()=>console.log("alt")} className="btnKey">alt</button>
                <button onClick={()=>handleInput(" ")} id="Space">space</button>
                <button onClick={()=>console.log("alt")} className="btnKey">alt</button>
                <button onClick={()=>console.log("option")} className="btnKey">option</button>
                <button onClick={()=>console.log("<-")} className="btnKey"><AiOutlineArrowLeft/></button>
                <button onClick={()=>console.log("->")} className="btnKey"><AiOutlineArrowRight/></button>
            </div>
        </div>
    </div>;
}

export default Keyboard;