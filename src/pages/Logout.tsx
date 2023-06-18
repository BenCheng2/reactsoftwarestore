import React from 'react'
import {Button, Container} from "@mui/material";

const Logout = () => {
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
                console.log(response_data);
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    return (
        <Container>
            <Button onClick={handleLogout}>Logout</Button>
        </Container>
    )
}
export default Logout
