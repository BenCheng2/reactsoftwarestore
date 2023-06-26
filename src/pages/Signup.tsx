import React, {ChangeEvent, useContext, useState} from 'react'
import {Button, Container, FormLabel, Grid, TextField, Typography} from "@mui/material";
import {log} from "util";

const Signup = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [email, setEmail] = useState('');


    const requestRegister = async () => {
        try {
            const data = {username: username, password: password, repassword: repassword, email: email};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include' as RequestCredentials
            }
            const response = await fetch('http://localhost:8080/user/doRegister', options);
            const response_data = await response.text();
            console.log(response_data);
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

    const setRepasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
        setRepassword(event.target.value);
    }

    const setEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    if (loggedIn) {
        return (
            <div>
                <Container>
                    <p>You are already logged in.</p>
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
                            <Grid item>
                                <TextField type="text" label="Username" color="primary" onChange={setUsernameValue} focused />
                            </Grid>
                            <Grid item>
                                <TextField type="password" label="Password" color="secondary" onChange={setPasswordValue} focused />
                            </Grid>
                            <Grid item>
                                <TextField type="repassword" label="Re-enter password" color="secondary" onChange={setRepasswordValue} focused />
                            </Grid>
                            <Grid item>
                                <TextField type="email" label="Email" color="primary" onChange={setEmailValue} focused />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={() => requestRegister()}>Sign up</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>


            </Grid>

        </div>
    )
}
export default Signup;
