import {Box,Image,Heading,Input,Button} from "@chakra-ui/react"
import { useState } from "react"
import Navbar from "../Navbar"
import {Link} from "react-router-dom"

import Verification from "../LoginFunctionality/Verification"
import { useEffect } from "react"

export default function SignIn()
{
    const [text,setText]=useState("")
   
    const handleClick =()=>{
       
   
            Verification(text)

  
    }

console.log("text", text)
    return (
        <>
        
        <Navbar/>
        <Box   mt="25px" >
                <Box display="flex" w="70%"  m="auto" gap="8rem">
                    <Box w="40%">
                        <Image src="https://www.jiomart.com/msassets/images/login-banner.jpg"/>
                    </Box>
                    <Box w="60%">
                        <Heading size="md">Sign in</Heading>
                        <p>Sign in to access your Orders, Offers and Wishlist.</p>
                        <Box display="flex" mt="2rem" >
                            <Heading size="lg" >+91 </Heading>
                       
            <Input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter your mobile no"></Input>
                        </Box>
                        <Link to="/Verification">
                        <Button onClick={handleClick} bg="#239ad6" color="white" 
                        mt="45px" ml="245px" borderRadius="24px">{">"}</Button>
                                </Link>
                    </Box>

                </Box>
                <Box textAlign="center" mt="45px">

            <p>By continuing you agree to our Terms of service
and Privacy & Legal Policy.</p>
           
                </Box>
                
        </Box>
        </>

    )
}