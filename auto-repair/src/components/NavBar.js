import React from 'react';
import { createTheme } from '@mui/material/styles';
import {
    AppBar, 
    Box, 
    Toolbar, 
    IconButton, 
    Typography, 
    Menu, 
    MenuItem, 
    Container, 
    Button, 
    Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
    {name:'Home',location:'index.html'},
    {name:'About',location:'about.html'},
    {name:'Service',location:'service.html'},
    {name:'Team',location:'team.html'},
    {name:'Contact',location:'contact.html'}
];

const theme = createTheme({
    palette: {
      ochre: {
        main: '#FF9F1C'
      },
    },
  });

function NavBar(){
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    return(
        <AppBar className='nav-bar' position='static'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            className='navbar-nav'
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page,i) => (
                                <MenuItem key={i} onClick={handleCloseNavMenu} className="nav-item nav-link active">
                                    <Link href={page.location} underline="none">
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page,i) => (
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={page.location}
                                className='btn-custom'
                                key={i}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0}}>
                        <Button className="btn btn-custom"
                            href='/appointment'
                        >
                            Get Appointment
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;