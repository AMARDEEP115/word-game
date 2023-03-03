import { Route, Routes } from "react-router-dom"
import Keyboard from "../Components/Keyboard"
import Dashboard from "../Pages/Dashboard"
import End from "../Pages/End"
import Home from "../Pages/Home"

const AllRoutes=(theme)=>{
    return <Routes>
        <Route path="/" element={<Home theme={theme}/>} />
        <Route path="/playzone" element={<Keyboard theme={theme}/>} />
        <Route path="/end" element={<End theme={theme}/>} />
        <Route path="/dashboard" element={<Dashboard theme={theme}/>} />
    </Routes>
}

export default AllRoutes;