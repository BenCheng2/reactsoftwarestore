import React from 'react'
import {Grid, Typography} from "@mui/material";

const Profile = () => {
    return (
        <div>
            <Grid justifyContent={ "center" } sx={ {m: 2} }>
                <Typography>Username</Typography>
                <Typography>Password</Typography>
                <Typography>Email</Typography>
            </Grid>
        </div>
    )
}
export default Profile
