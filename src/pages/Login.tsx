import React, {useState} from 'react'
import {Button, Container, FormLabel, Grid, TextField} from "@mui/material";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const requestLogin = async () => {
        try {
            const data = {username: 'username', password: 'password'};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('http://localhost:8080/user/login', options);

            console.log("Success")
        } catch (error) {
            console.log("error", error);
        }
    };



    return (
        <div>
            <Grid container justifyContent={"center"} alignItems={"center"} pt={10}>
                <Grid item>
                    <form>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <TextField type="text" label="Username"/>
                            </Grid>
                            <Grid item>
                                <TextField type="password" label="Password" />
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
