import React from 'react';
import {Container, Box, Grid} from '@mui/material';

const partners = [
    {name:"CFAO MOTORS",picture:"assets/img/partner-1.jpeg"},
    {name:"HAMADA",picture:"assets/img/partner-2.jpg"},
    {name:"CFAO MOTORS",picture:"assets/img/partner-1.jpeg"},
    {name:"HAMADA",picture:"assets/img/partner-2.jpg"},
];

export default function Partner() {
    return(
        <div id='partner'>
        <Container className='testimonial'>
            <Box className='section-header' component="div" sx={{ flexGrow: 0}} textAlign='center'>
                <p>Partner</p>
                <h2>Who trust us</h2>
            </Box>
            <Grid container spacing={2}>
                {partners.map((partner,i) => (
                    <Grid item className='team-item' alignItems='center' textAlign='center' md={6} lg={3} key={i}>
                        <Container className='team-img'>
                            <img src={partner.picture} width={200} height={96} alt="Team Image"/>
                        </Container>
                        <Container sx={{ flexGrow: 0}} className='team-text' component={'div'}>
                            <h2>{partner.name}</h2>
                            <Box sx={{ flexGrow: 0}} className='team-social' component={'div'}>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </Box>
                        </Container>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </div>
    );
}