import {Box} from "@chakra-ui/react"


export default function Footer()
{

    return (
        <>
        <Box w="90%" m="auto" bg="rgba(21,27,57,.08)">
        <Box display="flex" justifyContent="space-between" 
       m="auto" mt="28px" pt="9px"  w="80%" >
            <div>
                <ul type="none">
                <Box fontWeight="bold"> MOST POPULAR CATEGORIES</Box>
                    <li>Staples</li>
                    <li>Beverages</li>
                    <li>Personal Care</li>
                    <li>Home Care</li>
                    <li>Fruits and Vegetables</li>
                    <li>Baby Care</li>
                    <li>Snacks & Branded Foods</li>
                    <li>Diary & Bakery</li>

                </ul>
            </div>

            <div>
                <ul type="none">
                <Box fontWeight="bold">CUSTOMER SERVICES</Box>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                    <li>E-waste Policy</li>
                    <li>Cancellation and return policy</li>
                </ul>
            </div>
            <Box borderLeft="1px" borderColor="rgba(21,27,57,.08)"></Box>
            <div>
                <ul type="none"><Box fontWeight="bold">CONTACT US</Box>
                    <li>WhatsApp us : 70003 70003</li>
                    <br />
                    <li>Call Us : 1800 890 1222</li>
                    <li>8:00 AM to 8:00 PM, 365 days</li>
                  <br />
                    <li>Please note that you are accessing the BETA</li>
                    <li>Version of www.jiomart.com</li>
                    <br/>

                    <li>Should you encounter any bugs, glitches, lack</li>
                    <li>of functionality, delayed deliveries, billing errors</li>
                    <li>or other problems on the beta website, please</li>
                    <li>email us on cs@jiomart.com</li>
                </ul>
                <br />
                <h3>DOWNLOAD APP</h3>
                <br />
                <Box display="flex" gap="2rem">
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" alt="" />
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" alt="" />
                </Box>
            </div>
            </Box>
            <Box display="flex" justifyContent="space-around" 
             border="1px" borderColor="rgba(21,27,57,.08)"
             mt="24px" >
                <p>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</p>
                <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
            </Box>
        </Box>
        </>
    )
}