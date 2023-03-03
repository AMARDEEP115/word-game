import './App.css';
import AllRoutes from './Router/AllRoutes';
import {MdOutlineModeNight} from "react-icons/md";
import React from 'react';

function App() {
  const [thm,setThm]=React.useState(false);
  if(thm){
    document.body.style.backgroundColor="black";
  } else {
    document.body.style.backgroundColor="white";
  }
  return (
    <div className="App">
      <div onClick={()=>setThm(!thm)} id="Theam">
        <MdOutlineModeNight color={thm?"white":"black"} size="30px"/>
      </div>
      <AllRoutes theme={thm}/>
    </div>
  );
}

export default App;
