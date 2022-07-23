import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState,useEffect } from "react"
import {Grid,Box,Image,Heading,Button,List,ListItem,Checkbox} from "@chakra-ui/react"
import {Link} from "react-router-dom"

export default function SearchInput(){



        const [data,setData]=useState([])
        const [store,setStore]=useState("")
        const [loading, setLoading] = useState(false);
        const[Popularity,setPopularity]=useState("")
        const [filtering,setFiltering]=useState("ASC")

        useEffect(()=>{
            setLoading(true);
        fetch("https://jiomartallapi.herokuapp.com/api/TopDeal"+`?_sort=finalprice&_order=${filtering}`)
        .then((res)=>res.json())
        .then((res)=>{
        setData(res)
        })
        .catch((err)=>{ setLoading(true);})

        },[Popularity,filtering])


        const handleStore=()=>{
        console.log("handleStore")
        console.log(data)

       localStorage.setItem("data", JSON.stringify(data));
        }
        console.log(filtering)
        console.log("pop",Popularity)

return(
    <>
      <Navbar/>
      <Box display="flex" justifyContent="space-between" m="auto">
        <Box>
           <List display="grid">
            <Box display="flex">

            <Link to="/">Home</Link>
            <Link to="/">  {">"}Categories</Link>
            </Box>
            <Heading mt="4px" mb="8px">Filters</Heading>
            
            <Checkbox size='md' colorScheme='blue'> Price </Checkbox>
            <Checkbox size='md' colorScheme='blue'> Quality </Checkbox>
            <Checkbox size='md' colorScheme='blue'> Discount </Checkbox>
           </List>
        </Box>
        <Box w="80%">
      <Box display="flex" justifyContent="space-between" mt="12px" mb="12px">

            <Box>
                <Heading size="sm">Showing{" "}{data.length}{" "}items</Heading>
            </Box>

            <Box display="flex" gap="1rem" > 
                <Heading size="lg">Sort by:</Heading>
                <Button onClick={()=>setPopularity("id")}>Popularity</Button>
                <Button onClick={()=>setFiltering("ASC")} >High to Low</Button>
                <Button  onClick={()=>setFiltering("DESC")} >Low to High</Button>
                <Button onClick={()=>setFiltering("")}>All Products</Button>
            </Box>

      </Box>
  
    <Grid  templateColumns="repeat(8,1fr)" 
    gap="0.5rem" w="100%" m="auto">
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
   </Box>
   </Box>
    <Footer/>
    </>
)


}