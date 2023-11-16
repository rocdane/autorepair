import React from 'react';
import { Container, Typography, Button, Box} from '@mui/material';
import TopBar from '../components/TopBar';

function NotFound() {
    return (
        <div className="App">
            <TopBar></TopBar>
            <Container>
                <Typography variant='h1'>404</Typography>
                <Typography variant='body-1'>
                    La page que vous demandez est introuvable. Cliquez sur le bouton ci-dessous pour retourner à l'accueil.
                </Typography>
                <Box alignContent={'center'}>
                    <Button className='btn btn-custom' href='/'>Accueil</Button>
                </Box>
            </Container>
        </div>
    );
}

export default NotFound;
