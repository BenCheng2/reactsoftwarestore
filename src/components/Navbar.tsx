import React, {useState} from 'react'
import {AppBar, Button, Link, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DrawerComponent from "./DrawerComponent";

const Navbar = () => {
    const theme = useTheme();

    const [value, setValue] = useState(0);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    // const PAGES = ['Products', 'Services', 'Contact Us', 'About Us'];
    const PAGES = [
        {title: 'Products', address: '/'},
        {title: 'Publish', address: '/publish'},
        {title: 'About', address: '/about'}
    ];


    return (
        <React.Fragment>
            <AppBar sx={ {background: theme.palette.primary.main } }>
                <Toolbar>
                    <LocalMallIcon/>
                    {
                        isMatch ? (
                            <>
                                <Typography sx={ {fontSize: '1.5rem', paddingLeft: '10%'} }>
                                    SHOPEE
                                </Typography>
                                <DrawerComponent/>

                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={ {marginLeft: 'auto'} }
                                    textColor={ "inherit" }
                                    value={ value }
                                    onChange={ (e, value) => setValue(value) }
                                    indicatorColor={ "secondary" }>
                                    { PAGES.map((page, index) => (
                                        <Tab label={ page.title } key={ index } href={page.address}/>
                                    ))
                                    }
                                </Tabs>

                                <Button href="/login" sx={ {marginLeft: '60%'} }
                                        variant={ "contained" }>Login</Button>
                                <Button href="/signup" sx={ {marginLeft: '2%'} }
                                        variant={ "contained" }>Signup</Button>
                                <Button href="/logout" sx={ {marginLeft: "2%"} }
                                        variant={ "contained" }>Logout</Button>

                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Navbar
