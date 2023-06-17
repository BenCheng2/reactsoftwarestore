import React, {useEffect, useState} from 'react'
import {Grid, Typography} from "@mui/material";

interface profileprops {
    username: string;
    introduction: string;
    email: string;
}



const Profile: React.FC<profileprops> = ({username, introduction, email}) => {
    const [accountInfo, setAccountInfo] = useState('');

    useEffect(() => {
        fetchAccountInfo(); // Fetch account information when the component mounts
    }, []);

    const fetchAccountInfo = async () => {
        try {
            const response = await fetch('http://localhost:8080/user/getUserInfo', {method: 'GET', credentials: 'include'});
            // const response = await fetch('http://localhost:8080/user/isLogin', {method: 'GET', credentials: 'include'});
            const data = await response.text();
            setAccountInfo(data);
        } catch (error) {
            console.log('Error fetching account information:', error);
        }
    };

    return (
        <div>
            <Typography sx={ {m: 5, fontSize: '2rem'} }>Account information</Typography>
            <Typography sx={ {m: 5, fontSize: '1rem'} }>
                Username: {accountInfo}
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
