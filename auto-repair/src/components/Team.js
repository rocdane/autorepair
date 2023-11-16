import React from 'react';
import {Container, Box, Grid} from '@mui/material';

const teams = [
    {picture:"/assets/img/team-1.jpg",name:"Donald John",position:"Engineer"},
    {picture:"/assets/img/team-2.jpg",name:"Adam Phillips",position:"Engineer"},
    {picture:"/assets/img/team-3.jpg",name:"Thomas Olsen",position:"Worker"},
    {picture:"/assets/img/team-4.jpg",name:"James Alien",position:"Worker"},
];

function Team() {
    return(
        <Container className='team'>
            <Box className='section-header' component="div" sx={{ flexGrow: 0}} textAlign='center'>
                <p>Meet Our Team</p>
                <h2>Our Engineers & Workers</h2>
            </Box>
            <Grid container spacing={2}>
                {teams.map((team,i) => (
                    <Grid item className='team-item' alignItems='center' textAlign='center' md={6} lg={3} key={i}>
                        <Container className='team-img'>
                            <img src={team.picture} alt="Team Image"/>
                        </Container>
                        <Container sx={{ flexGrow: 0}} className='team-text' component={'div'}>
                            <h2>{team.name}</h2>
                            <p>{team.position}</p>
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
    );
}

export default Team;