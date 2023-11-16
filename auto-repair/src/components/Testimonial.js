import React from 'react';
import {Container, Box, Paper} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const testimonials = [
    {name:"Client Name",legal:"Profession",content:"Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid"},
    {name:"Client Name",legal:"Profession",content:"Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid"},
    {name:"Client Name",legal:"Profession",content:"Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid"},
    {name:"Client Name",legal:"Profession",content:"Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor auctor gravid"}
];

export default function Testimonial() {
    return(
        <Container className='testimonial'>
            <Box className='section-header' component="div" sx={{ flexGrow: 0}} textAlign='center'>
                <p>Testimonial</p>
                <h2>What our clients say</h2>
            </Box>
            <Carousel className="owl-carousel testimonials-carousel">
            {
                testimonials.map( (testimonial, i) => (
                    <Paper className="testimonial-item" key={i}>
                        <img src="/assets/img/testimonial-1.jpg" alt="Image"/>
                        <Container className='testimonial-text'>
                            <h3>{testimonial.name}</h3>
                            <h4>{testimonial.legal}</h4>
                            <p>{testimonial.content}</p>
                        </Container>
                    </Paper>
                ))
            }
            </Carousel>
        </Container>
    );
}