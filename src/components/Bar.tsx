import React from 'react'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton, Link,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import Product from "./Product";

const pages = [{title: 'Products', address: '/'},
    {title: 'About', address: '/about'}];
const settings = ['Profile', 'Account', 'Cart', 'Logout'];

const Bar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={ {
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        } }
                    >
                        SoftStore
                    </Typography>

                    <Box sx={ {flexGrow: 1, display: {xs: 'flex', md: 'none'}} }>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleOpenNavMenu }
                            color="inherit"
                        >
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorElNav }
                            anchorOrigin={ {
                                vertical: 'bottom',
                                horizontal: 'left',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'left',
                            } }
                            open={ Boolean(anchorElNav) }
                            onClose={ handleCloseNavMenu }
                            sx={ {
                                display: {xs: 'block', md: 'none'},
                            } }
                        >
                            { pages.map((page) => (
                                <MenuItem key={ page.title } onClick={ handleCloseNavMenu }>
                                    <Typography textAlign="center">{ page.title }</Typography>
                                </MenuItem>
                            )) }
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={ {
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        } }
                    >
                        LOGO
                    </Typography>
                    <Box sx={ {flexGrow: 1, display: {xs: 'none', md: 'flex'}} }>
                        { pages.map((page) => (
                            <Button
                                href={page.address}
                                key={ page.title }
                                onClick={ handleCloseNavMenu }
                                sx={ {my: 2, color: 'white', display: 'block'} }
                            >
                                { page.title }
                            </Button>
                        )) }
                    </Box>

                    <Box sx={ {flexGrow: 0} }>
                        <Tooltip title="Open settings">
                            <IconButton onClick={ handleOpenUserMenu } sx={ {p: 0} }>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={ {mt: '45px'} }
                            id="menu-appbar"
                            anchorEl={ anchorElUser }
                            anchorOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            open={ Boolean(anchorElUser) }
                            onClose={ handleCloseUserMenu }
                        >
                            { settings.map((setting) => (
                                <MenuItem component={ Link } key={ setting } onClick={ handleCloseUserMenu }>
                                    <Typography textAlign="center">{ setting }</Typography>
                                </MenuItem>
                            )) }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Bar

