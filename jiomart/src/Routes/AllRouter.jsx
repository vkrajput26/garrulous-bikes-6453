
import { Routes, Route } from "react-router-dom"
import SearchInput from "../Components/SearchInput"
import Home from "../Components/Home"
import SignIn from "../Components/LoginFunctionality/Sign"
import Verification from "../Components/LoginFunctionality/Verification"
export default function AllRoutes()
{
    return(
        <>
  
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SearchInput" element={<SearchInput/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Verification" element={<Verification/>}/>



        
        </Routes>
        </>
    )
}