


import {Box,Image,Heading,Input,Button} from "@chakra-ui/react"
import { useState } from "react"
import Navbar from "../Navbar"
import {Link} from "react-router-dom"

export default function Verification(props)
{
 
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
                       
                        <Box display="flex" mt="2rem" gap="1rem" >
                            <Heading pt="28px" size="md" >+91 </Heading>
                      
                            <Input mt="24px" />
                        
                        </Box>
                      
                        <Input mt="24px" placeholder="Enter your OTP"/>
                      
                      <Link to="/">
                      
                        <Button bg="#239ad6" color="white" 
                        mt="45px" ml="245px" borderRadius="24px" w="40%">Verify</Button>
                      </Link>

                    </Box>

                </Box>
   
                
        </Box>
     
        </>

    )
}