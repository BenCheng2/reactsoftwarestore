import React from 'react'
import Product from "../components/Product";
import {AppBar, Button, Grid, IconButton, Link, Toolbar, Typography} from "@mui/material";
import products from "../resources/products.json";
import Bar from "../components/Bar";

export default function Products(){
    return (
        <div>
            <Grid container justifyContent={ "center" } sx={ {m: 2} }>
                { products.map((product) => {
                    return (
                        <Product key={ product.title }  { ...product }/>
                    )
                }) }

            </Grid>
        </div>
    )
}

