
import { Routes, Route } from "react-router-dom"
import SearchInput from "../Components/SearchInput"
import Home from "../Components/Home"

export default function AllRoutes()
{
    return(
        <>
  
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SearchInput" element={<SearchInput/>}/>
        </Routes>
        </>
    )
}