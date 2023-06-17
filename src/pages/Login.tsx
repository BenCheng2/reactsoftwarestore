import React, {ChangeEvent, useContext, useState} from 'react'
import {Button, Container, FormLabel, Grid, TextField} from "@mui/material";
import {log} from "util";

const Login = () => {

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
            }
            const response = await fetch('http://localhost:8080/user/doLogin', options);
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



    return (
        <div>
            <Grid container justifyContent={"center"} alignItems={"center"} pt={10}>
                <Grid item>
                    <form>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <TextField type="text" label="Username" onChange={setUsernameValue}/>
                            </Grid>
                            <Grid item>
                                <TextField type="password" label="Password"  onChange={setPasswordValue} />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={() => requestLogin()}>Login</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>


            </Grid>

        </div>
    )
}
export default Login
