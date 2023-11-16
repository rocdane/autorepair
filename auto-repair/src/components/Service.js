import React from 'react';
import {Container, Box, Grid, Typography, Button} from '@mui/material';

const services = [
    {
        icon:"flaticon-car-wash-1",
        title:"Exterior Washing",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
    {
        icon:"flaticon-car-wash",
        title:"Interior Washing",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
    {
        icon:"flaticon-vacuum-cleaner",
        title:"Vacuum Cleaning",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
    {
        icon:"flaticon-seat",
        title:"Seats Washing",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
    {
        icon:"flaticon-car-service",
        title:"Window Wiping",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
    {
        icon:"flaticon-car-service-2",
        title:"Wet Cleaning",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
    {
        icon:"flaticon-car-service-2",
        title:"Oil Changing",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
    {
        icon:"flaticon-car-wash",
        title:"Brake Reparing",
        description:"Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor"
    },
]
function Service(){
    return(
        <Container className='service'>
            <Box component="div" sx={{ flexGrow: 0}} className="section-header text-center" textAlign='center'>
                <p>What We Do?</p>
                <h2>Premium Washing Services</h2>
            </Box>
            <Box component="div" sx={{ flexGrow: 0}}>
                <Grid container>
                {services.map((service,i) => (
                    <Grid item md={6} lg={3} className='service-item' key={i}>
                        <i className={service.icon}></i>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Grid>
                ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Service;