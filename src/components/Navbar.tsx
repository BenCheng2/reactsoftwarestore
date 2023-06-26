import React, {Fragment} from 'react'
import {AppBar, Button, Container, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DrawerComponent from "./DrawerComponent";

const Navbar = () => {
    const theme = useTheme();

    const [value, setValue] = React.useState('one');
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    // const PAGES = ['Products', 'Services', 'Contact Us', 'About Us'];
    const PAGES = [
        {title: 'Products', address: '/'},
        {title: 'Publish', address: '/publish'},
        {title: 'Profile', address: '/profile'},
        {title: 'About', address: '/about'}
    ];


    return (
        <Fragment>
            <AppBar sx={
                {background: "#c9deeb",
            } }>
                <Toolbar
                    sx={{
                        justifyContent: 'normal',
                        alignItems: 'center',
                        maxHeight:'64px',
                        fontFamily: 'Manrope,sans-serif!important'
                    }}
                >
                    <LocalMallIcon/>
                    {
                        isMatch ? (
                            <>
                                <Typography sx={ {fontSize: '1.5rem', paddingLeft: '10%', color: "#ffa000"} }>
                                    SHOPEE
                                </Typography>
                                <DrawerComponent/>

                            </>
                        ) : (
                            <>
                                <div>
                                    <Tabs aria-label="secondary tabs example" sx={{color: '#e698b1', marginLeft:'5px', marginTop:'3px'}}>
                                        {PAGES.map((page, index) => (
                                            <Tab key={index} label={page.title} href={page.address} sx={{color: '#965454', fontSize: '1rem'}}/>
                                        ))}
                                    </Tabs>

                                </div>
                                    <Button href="/login" size="large"
                                            sx={{
                                                marginLeft: '45%',
                                                marginRight: '2%',
                                                borderRadius: '12px',
                                                background: '#69a3d7',
                                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                            }}
                                            variant={ "contained" }>Login</Button>
                                    <Button href="/signup" size="large"
                                            sx={{
                                                marginRight: '2%',
                                                borderRadius: '12px',
                                                background: '#69a3d7'
                                            }}
                                            variant={ "contained" }>Signup</Button>
                                    <Button href="/logout" size="large"
                                            sx={{
                                                marginRight: '2%',
                                                borderRadius: '12px',
                                                background: '#69a3d7'
                                            }}
                                            variant={ "contained" }>Logout</Button>


                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
export default Navbar;
