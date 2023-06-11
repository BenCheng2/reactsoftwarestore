import React from 'react'
import Product from "../../components/Product";
import {AppBar, Button, Grid, IconButton, Link, Toolbar, Typography} from "@mui/material";
import products from "../../resources/products.json";

const Homepage = () => {
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Products
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container justifyContent={"center"} sx={{m:2}}>
                {products.map((product) => {
                    return (
                        <Product key={product.title} {...product}/>
                    )
                })}

            </Grid>
        </div>
    )
}
export default Homepage
