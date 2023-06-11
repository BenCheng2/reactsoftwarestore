import React from 'react'
import Product from "../../components/Product";
import {AppBar, Button, Grid, IconButton, Link, Toolbar, Typography} from "@mui/material";

const products = [
    {
        title: 'Clion',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
    {
        title: 'Jetbrain',
        subheader: 'IDE',
        iconAddress: './pycharm.png',
        product: 'Clion',
        firstYearPrice: '$200',
        secondYearPrice: '$400',
        thirdYearPrice: '$600',
        learnMore: '',
        getQuote: '',
        buyLink: '',
    },
];

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
