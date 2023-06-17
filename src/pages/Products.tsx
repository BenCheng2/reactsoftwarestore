import React, {useEffect, useState} from 'react'
import Product from "../components/Product";
import {AppBar, Button, Grid, IconButton, Link, Toolbar, Typography} from "@mui/material";
import products from "../resources/products.json";
import Bar from "../components/Bar";

export default function Products() {
    const [products, setProducts] = useState<Array<typeof Product>>([]);

    useEffect(() => {
        fetchProducts().then(r => console.log("fetched products"));
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/products/getAllProducts', {method: 'GET'});

            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log("error", error);
        }
    };


    return (
        <div>
            <Grid container justifyContent={ "center" } sx={ {m: 2} }>
                { products.map((product) => {
                    return (
                        // <div />
                        <Product key="product.title" title={ 'product.title' }
                                 subheader={ 'product.subheader' }
                                 product={ 'product.product' }
                                 firstYearPrice={ 'product.firstYearPrice' }
                                 secondYearPrice={ 'product.secondYearPrice' }
                                 thirdYearPrice={ 'product.thirdYearPrice' }
                                 { ...product }/>
                    )
                }) }

            </Grid>
        </div>
    )
}

