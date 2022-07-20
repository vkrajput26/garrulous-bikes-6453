
import {Button,ListItem,List,Menu,MenuButton,MenuList,MenuItem } from "@chakra-ui/react"
import {ChevronDownIcon} from"@chakra-ui/icons"
export default function MentuItems({Listname,NameOne,NameTwo,NameThree,NameFour,NameFive,NameSix}){

    return(
        <>
           <ListItem>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                     {Listname}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>{NameOne}</MenuItem>
                        <MenuItem>{NameTwo}</MenuItem>
                        <MenuItem>{NameThree}</MenuItem>
                        <MenuItem>{NameFour}</MenuItem>
                        <MenuItem>{NameFive}</MenuItem>
                        <MenuItem>{NameSix}</MenuItem>
                    </MenuList>
                    </Menu>
                    </ListItem>

        </>
    )
}