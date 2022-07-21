    import {Box,Button,useDisclosure,Input,Image,ListItem,List } from "@chakra-ui/react"
    import {
        Drawer,
        DrawerBody,
        DrawerFooter,
        DrawerHeader,
        DrawerOverlay,
        DrawerContent,
        DrawerCloseButton,
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        MenuItemOption,
        MenuGroup,
        MenuOptionGroup,
        MenuDivider
    } from '@chakra-ui/react'
    
    import {useRef} from "react"
    import {ChevronDownIcon} from"@chakra-ui/icons"
    import { Icon } from '@chakra-ui/react'
    import MentuItems from "./MenuItems"
    import {Link} from "react-router-dom"

    export default function Navbar(){
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = useRef()
    
       const  handleKeyPress=(event)=>{
            if(event.key=="Enter")
            {
                console.log("handleKeyPress print");
                <Link to={"/SearchInput"}>SearchInput</Link>
            }
        }

        return (
            <Box>
        <Box bg="#008ecc" >
            <Box m="auto" h="75px" w="80%" alignItems="center" 
            display="flex" 
            justifyContent="space-around" bg="#008ecc">
                <Box alignItems="center"  display="flex" gap="1.5rem">
                    <Box>
                        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                            {/* <Icon as={HamburgerIcon} /> */}
                            open
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement='left'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>Create your account</DrawerHeader>

                                <DrawerBody>
                                    <Input placeholder='Type here...' />
                                </DrawerBody>

                                <DrawerFooter>
                                    <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                    </Button>
                                    <Button colorScheme='blue'>Save</Button>
                                </DrawerFooter>
                                </DrawerContent>
                            </Drawer>


                    </Box>
                    <Box>
                    <Image src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPmTXd7Wv5pEPjs508yq42PtBERgxbVOIMhxh3IlhpD8S7uR3L' 
                    w="104px"  h="70px" alt='jiomart' />


                    </Box>
                </Box>

                <Box w="50%"   > 
                <Input w="100%" bg="white" placeholder='Search essentials,groceries,and more...' size='lg' 
              type="text"  onKeyPress={handleKeyPress}  />
                
            </Box>
                <Box >
                    <Box h="18%" w="32px"  borderRadius="8px" bg="#008ecc" pt="2px"  pl="3px">
                        <Image  borderRadius="12px" w="24px" src='https://www.vippng.com/png/detail/214-2142162_member-login-icon-png-user-sign-in-icon.png'/>
                    </Box>
                </Box>
                <Box>
                    <Image w="24px"   src='https://cdn-icons-png.flaticon.com/512/263/263142.png'/>
                </Box>
            </Box>
    </Box>  

                <Box bg="#ececed">
                <List gap="1rem" m="auto" w="70%"  display="flex">
                
                    <ListItem>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                            Groceries
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Fruit & Vedetables</MenuItem>
                            <MenuItem>Premium Fruit</MenuItem>
                            <MenuItem>Dairy & Bekery</MenuItem>
                            <MenuItem>Staples</MenuItem>
                            <MenuItem>Snacks & Branded Food</MenuItem>
                            <MenuItem>Beverages</MenuItem>
                        </MenuList>
                        </Menu>
                        </ListItem>

                    
                        {/* {Listname,NameOne,NameTwo,NameThree,NameFour,NameFive,NameSix} */}
                        <MentuItems Listname={"Premium Fruits"} NameOne={"Avocado, Peach, Plum"} NameTwo={"Cherries, Berries & Exotic"} 
                        NameThree={"Fruits"} NameFour={"Pomegranate, Papaya &"} NameFive ={"Pineapple"} NameSix={"Citrus, Mango & Grapes"} />

                    <MentuItems Listname={"Home & Kitchen"} NameOne={"Kitchenware"} NameTwo={"Dining"} 
                        NameThree={"Furnishing"} NameFour={"Home Decor"} NameFive ={"Furniture"} NameSix={"Home Appliances"} />

                        <MentuItems Listname={"Fashion"} NameOne={"Men"} NameTwo={"Women"} 
                        NameThree={"Boys"} NameFour={"Grils"} NameFive ={"Infants"} NameSix={"Boys"} />

                        <MentuItems Listname={"Electronics"} NameOne={"Mobiles & Tablets"} NameTwo={"TV & Speaker"} 
                        NameThree={"Computers"} NameFour={"Cameras"} NameFive ={"Gaming"} NameSix={"Personal Care & Grooming"} />


                        <MentuItems Listname={"Beauty"} NameOne={"Make-Up"} NameTwo={"Hair"} 
                        NameThree={"Skin Care"} NameFour={"Fragrances"} NameFive ={"Personal Care"} NameSix={"Mom & Baby"} />


                        <MentuItems Listname={"Jewellary"} NameOne={"Fine Jewellary"}  />
                        
            </List>
                </Box>



    </Box>
        )
    }