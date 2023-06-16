import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Card,
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
const Product: React.FC<productprops> = ({
                                             title,
                                             subheader,
                                             product,
                                             firstYearPrice,
                                             secondYearPrice,
                                             thirdYearPrice,

                                         }) => {
    return (
        <div>
            <Card
                sx={ {
                    width: 300,
                    border: '1px solid rgba(39,40,44,.2)',
                    backgroundColor: '#fafafa',
                    // Ensure distance between multiple cards
                    m: 1
                } }
            >
                <CardHeader
                    title={ title }
                    subheader={ subheader }
                    titleTypographyProps={ {align: 'left'} }
                    subheaderTypographyProps={ {
                        align: 'left',
                    } }
                    sx={ {
                        backgroundColor: '#fafafa',
                    } }
                >
                </CardHeader>

                <Container disableGutters={ true }
                           sx={ {
                               ml: 2,
                               mb: 2,
                               display: 'flex',
                               flexDirection: 'row',
                           } }
                >
                    <Avatar
                        src={ require('../resources/pycharm.png') }
                        sx={ {
                            height: 20, width: 20,
                        } }
                    >
                    </Avatar>
                    <Typography sx={ {ml: 1} }>{ product }</Typography>
                </Container>

                <Divider/>

                <CardContent>
                    <Box
                        sx={ {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            mb: 2,
                        } }
                    >
                        <Typography variant="subtitle2" color="#5E94C7">
                            per user, first year
                        </Typography>
                        <Typography variant="h5" color="#19191C" sx={ {} }>
                            { firstYearPrice }
                        </Typography>
                    </Box>

                    <Box
                        sx={ {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            mb: 2,
                        } }
                    >
                        <Typography variant="subtitle2" color="#5E94C7">
                            second year
                        </Typography>
                        <Typography variant="subtitle2" color="#19191C">
                            { secondYearPrice }
                        </Typography>
                    </Box>

                    <Box
                        sx={ {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                            mb: 2,
                        } }
                    >
                        <Typography variant="subtitle2" color="#5E94C7">
                            third year onwards
                        </Typography>
                        <Typography variant="subtitle2" color="#19191C">
                            { thirdYearPrice }
                        </Typography>
                    </Box>
                    <Box
                        sx={ {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        } }
                    >
                        <Container
                            sx={ {
                                display: 'flex',
                                flexDirection: 'column',
                            } }
                            disableGutters={ true }
                        >
                            <Link href="/" color="inherit" sx={ {
                                fontSize: 16
                            } }>
                                Learn more
                            </Link>
                            <Link href="/" color="inherit" sx={ {
                                fontSize: 16,
                            } }>
                                Get quote
                            </Link>
                        </Container>
                        <Button variant="contained" sx={ {
                            color: "#eeeeee",
                            background: "#2196f3",
                            '&:hover': {
                                color: "#607d8b",
                                background: '#bdbdbd',
                            },
                            height: 40
                        } }>
                            Buy
                        </Button>

                    </Box>
                </CardContent>


            </Card>


        </div>
    )
}
export default Product
