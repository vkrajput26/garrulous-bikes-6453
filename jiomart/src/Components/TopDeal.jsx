import { useEffect, useState } from "react"
import {Box,Image,Heading,Grid,Button } from "@chakra-ui/react"
import {Link} from "react-router-dom"


export default function TopDeal(){
  
    const [data,setData]=useState([])
    const [store,setStore]=useState()

useEffect(()=>{

fetch("https://jiomartallapi.herokuapp.com/api/TopDeal?_limit=16")
.then((res)=>res.json())
.then((res)=>{
  setData(res)
})
.catch((err)=>{})

},[])
console.log(data)

const handleStore=()=>{
    console.log("handleStore")

    window.localStorage.setItem("data", JSON.stringify(data));
}


    return(
        <>
        <Heading  p="18px"  size="md">Top Deal</Heading>
        <Grid  templateColumns="repeat(8,1fr)" 
        gap="0.5rem" w="80%" m="auto">
       {
        data.map((item)=>(

       <Box key={item.id}
       m="auto"  mb="1.5rem" border="1px" borderColor="lightblue" borderRadius="4px">
            <Image  src={item.image}/>
            <Heading  size="sm">{item.clsgetname}</Heading>
            <Heading  size="sm">₹{item.finalprice}</Heading>
            <Heading  size="sm" textDecorationLine="line-through">M.R.P:{item.price}</Heading>
            <Heading color="green" size="sm">{item.save}</Heading>
            <Button onClick={handleStore} bg="#239ad6" color="white" alignItems="center">Add to Cart  </Button>
        </Box>
        ))}
        </Grid >
       
        </>
    )
}