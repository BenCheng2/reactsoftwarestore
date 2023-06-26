import React, {useState} from 'react'
import {
    Avatar,
    Box,
    Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Divider,
    Link,
    Typography
} from "@mui/material";

interface productprops {
    title: string;
    subheader: string;
    product: string;
    firstYearPrice: string;
    secondYearPrice: string;
    thirdYearPrice: string;
}

// @ts-ignore
const Product: React.FC<productprops> = ({   id,
                                             title,
                                             subheader,
                                             product,
                                             firstYearPrice,
                                             secondYearPrice,
                                             thirdYearPrice,

                                         }) => {
    const [Id, setId] = useState(id);

    const fetchBuyProduct = async () => {
        try {
            const data = {id: id};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include' as RequestCredentials
            }
            const response = await fetch('http://localhost:8080/user/buyProduct', options);
            const response_data = await response.text();
            console.log(response_data);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div>
            <Card sx={{ minWidth: 275, m:2, background: '#edece8', color: 'f2af9b'}}>
                <CardContent>
                    <Typography variant="h5" component="div" color="#96a48b">
                        { title }
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="#f2af9b">
                        { subheader }
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5, display: 'flex', justifyContent: 'space-between' }}>
                        {product}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <span>per user, first year</span>
                        <span>${ firstYearPrice }</span>
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <span>second year</span>
                        <span>${ secondYearPrice }</span>
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>third year onwards</span>
                        <span>${ thirdYearPrice }</span>
                    </Typography>


                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>fetchBuyProduct()} sx={{justifyContent: 'flex-start', marginLeft: '3px'}}>Buy</Button>
                </CardActions>
            </Card>

        </div>
    )
}
export default Product
