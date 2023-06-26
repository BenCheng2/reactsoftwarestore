import React, {useEffect, useState} from 'react'
import {Container, Grid, Typography} from "@mui/material";
import product from "../components/Product";

interface profileprops {
    username: string;
    introduction: string;
    email: string;
}

interface accountInfo {
    username: string;
    email: string;

}

interface productInfo {
    title: string;
    subheader: string;
    product: string;
    firstYearPrice: number;
    secondYearPrice: number;
}



const Profile: React.FC<profileprops> = ({username, introduction, email}) => {
    const [accountInfo, setAccountInfo] = useState<accountInfo>({username: '', email: ''});
    const [purchased, setPurchased] = useState<productInfo[]>([]);
    const [published, setPublished] = useState<productInfo[]>([]);

    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        fetchAccountInfo(); // Fetch account information when the component mounts
        fetchPurchased();
        fetchPublished();
    }, []);

    const fetchAccountInfo = async () => {
        try {
            const response = await fetch('http://localhost:8080/user/getUserInfo', {method: 'GET', credentials: 'include'});
            const dataString = await response.text();
            const data= JSON.parse(dataString);
            setAccountInfo(data);
        } catch (error) {
            console.log('Error fetching account information:', error);
        }
    };

    const fetchPurchased = async () => {
        try {
            const response = await fetch('http://localhost:8080/user/getPurchased', {method: 'GET', credentials: 'include'});
            const dataString = await response.text();
            const data= JSON.parse(dataString);
            setPurchased(data);
        } catch (error) {
            console.log('Error fetching purchased information:', error);
        }
    }
    const fetchPublished = async () => {
        try {
            const response = await fetch('http://localhost:8080/user/getPublished', {method: 'GET', credentials: 'include'});
            console.log("here");
            const dataString = await response.text();
            const data= JSON.parse(dataString);
            setPublished(data);
        } catch (error) {
            console.log('Error fetching account information:', error);
        }
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
            <Typography sx={ {m: 5, fontSize: '2rem'} }>Account information</Typography>
            <Typography sx={ {m: 5, fontSize: '1rem'} }>
                Username: {accountInfo.username}
            </Typography>
            <Typography sx={ {m: 5, fontSize: '1rem'} }>
                Email: {accountInfo.email}
            </Typography>
            <ul>
                {purchased.map((product, index) => (
                    <li key={index}>
                        <Typography>{product.title}</Typography>
                        <Typography>{product.subheader}</Typography>
                        <Typography>{product.product}</Typography>
                        <Typography>First Year Price: {product.firstYearPrice}</Typography>
                        <Typography>Second Year Price: {product.secondYearPrice}</Typography>
                    </li>
                ))}
            </ul>
            <ul>
                {published.map((product, index) => (
                    <li key={index}>
                        <Typography>{product.title}</Typography>
                        <Typography>{product.subheader}</Typography>
                        <Typography>{product.product}</Typography>
                        <Typography>First Year Price: {product.firstYearPrice}</Typography>
                        <Typography>Second Year Price: {product.secondYearPrice}</Typography>
                    </li>
                ))}
            </ul>


        </div>
    )
}
export default Profile
