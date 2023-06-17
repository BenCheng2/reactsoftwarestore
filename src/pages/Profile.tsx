import React from 'react'
import {Grid, Typography} from "@mui/material";

interface profileprops {
    username: string;
    introduction: string;
    email: string;
}

const Profile: React.FC<profileprops> = ({username, introduction, email}) => {
    return (
        <div>
            <Typography sx={ {m: 5, fontSize: '2rem'} }>Account information</Typography>
            <Typography sx={ {m: 5, fontSize: '1rem'} }>
                Username: {username}
            </Typography>
            <Typography sx={ {m: 5, fontSize: '1rem'} }>
                Password
            </Typography>
            <Typography sx={ {m: 5, fontSize: '1rem'} }>
                Email: {email}
            </Typography>

        </div>
    )
}
export default Profile
