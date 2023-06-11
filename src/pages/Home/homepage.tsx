import React from 'react'
import Product from "../../components/Product";
import {Grid} from "@mui/material";

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
];

const Homepage = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{m:2}}>
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
