import React, {useState} from 'react'
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const PAGES = ['Products', 'Services', 'Contact Us', 'About Us', 'Login', 'Logout'];


    return (
        <React.Fragment>
            <Drawer open={ openDrawer } onClose={ () => setOpenDrawer(false) }>
                <List>
                    { PAGES.map((page, index)=>(
                        <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                            <ListItemIcon>
                                {page}
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{color:'white', marginLeft:'auto'}} onClick={ () => setOpenDrawer(!openDrawer) }>
                <MenuBookIcon/>
            </IconButton>
        </React.Fragment>
    )
}
export default DrawerComponent
