import React, {ChangeEvent, useEffect, useState} from 'react'
import {Button, Container, Grid, TextField, Typography} from "@mui/material";

const Publish = () => {

    const [title, setTitle] = useState('');
    const [subheader, setSubheader] = useState('');
    const [product, setProduct] = useState('');
    const [firstYearPrice, setFirstYearPrice] = useState('');
    const [secondYearPrice, setSecondYearPrice] = useState('');
    const [thirdYearPrice, setThirdYearPrice] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);


    const requestPublish = async () => {
        try {
            const data = {title: title, subheader: subheader, product: product, firstYearPrice: firstYearPrice, secondYearPrice: secondYearPrice};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include' as RequestCredentials
            }
            const response = await fetch('http://localhost:8080/product/addProduct', options);
            const response_data = await response.text();
            alert("You published a product");
            window.location.reload();
            console.log(response_data);
        } catch (error) {
            console.log("error", error);
        }
    };


    const setTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const setSubheaderValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSubheader(event.target.value);
    }

    const setProductValue = (event: ChangeEvent<HTMLInputElement>) => {
        setProduct(event.target.value);
    }

    const setFirstYearPriceValue = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstYearPrice(event.target.value);
    }

    const setSecondYearPriceValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSecondYearPrice(event.target.value);
    }

    const setThirdYearPriceValue = (event: ChangeEvent<HTMLInputElement>) => {
        setThirdYearPrice(event.target.value);
    }

    const checkLogin = async () => {
        try {
            const data = {};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include' as RequestCredentials
            }
            const response = await fetch('http://localhost:8080/user/checkLogin', options);
            const response_data = await response.json();
            console.log(response_data);
            setLoggedIn(response_data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        checkLogin();
    });

    if (!loggedIn) {
        return (
            <div>
                <Container>
                    <Typography sx={ {m: 5, fontSize: '1.5rem'} }>You did not login.</Typography>
                </Container>
            </div>
        );
    }



    return (
        <div>
            <Grid container justifyContent={"center"} alignItems={"center"} pt={10} >
                <Grid item>
                    <form>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <TextField type="text" label="Title" onChange={setTitleValue}/>
                            </Grid>
                            <Grid item>
                                <TextField type="text" label="Subheader" onChange={setSubheaderValue} />
                            </Grid>
                            <Grid item>
                                <TextField type="text" label="Product" onChange={setProductValue}/>
                            </Grid>
                            <Grid item>
                                <TextField type="text" label="FirstYearPrice" onChange={setFirstYearPriceValue} />
                            </Grid>
                            <Grid item>
                                <TextField type="text" label="SecondYearPrice" onChange={setSecondYearPriceValue} />
                            </Grid>
                            <Grid item>
                                <TextField type="text" label="ThirdYearPrice" onChange={setThirdYearPriceValue} />
                            </Grid>

                            <Grid item>
                                <Button variant="contained" color="primary" onClick={() => requestPublish()}>Publish</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>


            </Grid>

        </div>
    )
}
export default Publish
