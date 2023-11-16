import React from 'react';
import {
    Container, 
    Box, 
    Grid, 
    Typography, 
    Button, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function About(){
    const items = [
        'Seats washing',
        'Vacuum cleaning',
        'Interior wet cleaning',
        'Window wiping'
    ];
    return(
        <Container className='about'>
            <Grid container justifyContent='center' alignItems='center' spacing={2}>
                <Grid item md={6} xl={12}>
                    <Box className='about-img' component="div" sx={{ flexGrow: 0}}>
                        <img src="/assets/img/about.jpg" alt="Image"/>
                    </Box>
                </Grid>
                <Grid item md={6} xl={12}>
                    <Box component="div" sx={{ flexGrow: 0}}>
                        <Box className='section-header' textAlign='left'>
                            <Typography variant="subtitle1"><p>About Us</p></Typography>
                            <Typography variant='h2'>car washing and detailing</Typography>
                        </Box>
                        <Box className='about-content'>
                            <Typography variant='body1' textAlign='justify'>Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum</Typography>
                            <List className='ul'>
                            {items.map((item,i) => (
                                <ListItem className='li' key={i}>
                                    <ListItemIcon className="i">
                                        <CheckCircleOutlineIcon />
                                    </ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItem>
                            ))}
                            </List>
                            <Button className="btn btn-custom" href='/'>Learn More</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}