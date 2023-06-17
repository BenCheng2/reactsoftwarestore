import React from 'react'
import {Typography} from "@mui/material";

const About = () => {
    return (
        <div>
            <Typography sx={ {m: 5, fontSize: '2rem'} }>About</Typography>
            <Typography sx={ {m: 5, fontSize: '1rem'} }>
                This is a student's project for learning React, TypeScript, Material UI, and Spring Boot.
            </Typography>

        </div>
    );
}
export default About
