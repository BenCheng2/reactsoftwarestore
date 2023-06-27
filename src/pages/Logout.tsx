import React, {useEffect, useState} from 'react'
import {Button, Container, Typography} from "@mui/material";

const Logout = () => {
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogout = async () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include' as RequestCredentials
                }
                const response = await fetch('http://localhost:8080/user/logout', options);
                const response_data = await response.text();
                alert("You logged out");
                console.log(response_data);
            } catch (error) {
                console.log("error", error);
            }
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

    useEffect(()=>{
        checkLogin();
    })

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
        <Container>
            <Button onClick={handleLogout} href={"/"}>Logout</Button>
        </Container>
    )
}
export default Logout
