import React from 'react';
import {Container, Box, Grid} from '@mui/material';

const facts = [
    {icon:"fa fa-map-marker-alt",rubric:"Service Points",value:25},
    {icon:"fa fa-map-marker-alt",rubric:"Engineers & Workers",value:350},
    {icon:"fa fa-map-marker-alt",rubric:"Happy Clients",value:1500},
    {icon:"fa fa-map-marker-alt",rubric:"Projects Completed",value:5000},
];

function Fact(){
    return(
        <div className='facts'>
            <Container component="div">
                <Grid container spacing={2}>
                {facts.map((fact,i) => (
                    <Grid className="facts-item" item md={6} lg={3} key={i}>
                        <i className={fact.icon}></i>
                        <Box className="facts-text" sx={{ flexGrow: 0}}>
                            <h3 data-toggle="counter-up">{fact.value}</h3>
                            <p>{fact.rubric}</p>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Fact;