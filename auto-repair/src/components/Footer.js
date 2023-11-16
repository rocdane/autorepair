import React from 'react';
import {Container, Box, Grid} from '@mui/material';

export default function Footer() {

    return (
        <div className="footer">
            <Container >
                <Grid container>
                    <Grid item lg={3} md={6} className='footer-contact' textAlign={'left'}>
                        <h2>Get In Touch</h2>
                        <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope"></i>info@example.com</p>
                        <div className="footer-social">
                            <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={6} className='footer-link'>
                        <h2>Popular Links</h2>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                        <a href="">Our Service</a>
                        <a href="">Service Points</a>
                        <a href="">Pricing Plan</a>
                    </Grid>
                    <Grid item lg={3} md={6} className='footer-link'>
                        <h2>Useful Links</h2>
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </Grid>
                    <Grid item lg={3} md={6} className='footer-newsletter'>
                        <h2>Newsletter</h2>
                        <form>
                            <input className="form-control" placeholder="Full Name"/>
                            <input className="form-control" placeholder="Email"/>
                            <button className="btn btn-custom">Submit</button>
                        </form>
                    </Grid>
                </Grid>
                <Box className="copyright">    
                    <p>&copy; <a href="#">GMC PLUS</a>, All Right Reserved. Designed By <a href="#">N2A.CC</a></p>
                </Box>
            </Container>
        </div>
    );   
}