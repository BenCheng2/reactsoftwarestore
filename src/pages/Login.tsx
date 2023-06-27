import React, {ChangeEvent, useContext, useEffect, useState} from 'react'
import {Button, Container, FormLabel, Grid, TextField, Typography} from "@mui/material";

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const requestLogin = async () => {
        try {
            const data = {username: username, password: password};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include' as RequestCredentials
            }
            const response = await fetch('http://localhost:8080/user/doLogin', options);
            const response_data = await response.text();
            alert("You logged in");
            console.log(response_data);
        } catch (error) {
            console.log("error", error);
        }
    };

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

    const setUsernameValue = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const setPasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    useEffect(() => {
        checkLogin();
    });


    if (loggedIn) {
        return (
            <div>
                <Container>
                    <Typography sx={ {m: 5, fontSize: '1.5rem'} }>You are already logged in.</Typography>
                </Container>
            </div>
        );
    }


    return (
        <div>
            <Grid container justifyContent={"center"} alignItems={"center"} pt={10}>
                <Grid item>
                    <form>
                        <Grid container direction="column" spacing={2}>
                            <Grid item >
                                {/*<TextField type="text" label="Username" onChange={setUsernameValue}*/}
                                {/*   inputProps={{*/}
                                {/*        style: { backgroundColor: '#fffaf4' },*/}
                                {/*}}*/}
                                {/*/>*/}
                                <TextField label="Username" color="primary" onChange={setUsernameValue} focused />

                            </Grid>
                            <Grid item>
                                <TextField label="Password" color="secondary" onChange={setPasswordValue} focused />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={() => {
                                    requestLogin();
                                }} href="/">Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>


            </Grid>

        </div>
    )
}
export default Login
