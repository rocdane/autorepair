import React from 'react';
import {Container, Box, Grid, Link} from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

function TopBar(){
    return(     
        <Container maxWidth='xl'>
            <Grid container className='top-bar' justifyItems='center'>
                <Grid className='logo' item xs={12} md={4}>
                    <Box component="div" sx={{ flexGrow: 0}}>
                        <Link href="/index.html">
                            <img src="/assets/img/logo.png" width={60} height={60} alt="Logo"/>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box component="div" sx={{ flexGrow: 0, display: {md: 'inline', xs: 'none'}}} justifyItems="center" alignContent="center">
                        <Grid container className="top-bar-item" spacing={2}>
                            <Grid item md={1}>
                                <WatchLaterIcon className="top-bar-icon"></WatchLaterIcon>
                            </Grid>
                            <Grid item md={2} className="top-bar-text">
                                <h3>Opening Hour</h3>
                                <p>Mon - Fri, 8:00 - 9:00</p>
                            </Grid>
                            <Grid item md={1}>
                                <PhoneIcon className="top-bar-icon"></PhoneIcon>
                            </Grid>
                            <Grid item md={2} className="top-bar-text">
                                <h3>Call Us</h3>
                                <p>+012 345 6789</p>
                            </Grid>
                            <Grid item md={1}>
                                <MailIcon className="top-bar-icon"></MailIcon>
                            </Grid>
                            <Grid item md={2} className="top-bar-text">
                                <h3>Email Us</h3>
                                <p>info@example.com</p>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default TopBar;