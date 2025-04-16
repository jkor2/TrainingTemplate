import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 56, 100, 1)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', // To center everything vertically
      }}
    >
      <Container maxWidth="md">
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <img
             src={require('./images/pglogomain.png')} // Ensure this path is correct based on where the image is located
            alt="PG Logo"
            style={{
              maxWidth: '75%', // Ensures the logo doesn't overflow its container
              height: 'auto', // Keeps aspect ratio
              maxHeight: '150px', // Adjust size as needed
            }}
          />
        </Box>

        {/* Welcome Text */}
        <Typography variant="h3" align="center" gutterBottom>
          DiamondKast Contractor Training
        </Typography>

        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
  <Button
    variant="contained"
    onClick={() => navigate('/overview')}
    sx={{
      backgroundColor: '#00b34f',
      color: '#fff',
      textTransform: 'none',
      height: '50px',
      width: {
        xs: '90%',  // wide on mobile
        sm: '390px' // equal to 3 buttons
      },
      maxWidth: '400px', // optional, just to prevent stretching
      '&:hover': {
        backgroundColor: '#029241',
      },
    }}
  >
    Start Training
  </Button>
</Box>

<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: 4,
    flexDirection: {
      xs: 'column', // stack on mobile
      sm: 'row',    // row on larger screens
    },
    gap: 2,
  }}
>
  <Button
    variant="contained"
    onClick={() => navigate('/quicklinks')}
    sx={{
      backgroundColor: '#adadb0',
      color: '#fff',
      textTransform: 'none',
      height: '50px',
      width: {
        xs: '90%',
        sm: '120px',
      },
      maxWidth: '360px',
      '&:hover': {
        backgroundColor: '#656769',
      },
    }}
  >
    Quick Links
  </Button>

  <Button
    variant="contained"
    onClick={() => navigate('/sops')}
    sx={{
      backgroundColor: '#adadb0',
      color: '#fff',
      textTransform: 'none',
      height: '50px',
      width: {
        xs: '90%',
        sm: '120px',
      },
      maxWidth: '360px',
      '&:hover': {
        backgroundColor: '#656769',
      },
    }}
  >
    SOPs
  </Button>

  <Button
    variant="contained"
    onClick={() => navigate('/faqs')}
    sx={{
      backgroundColor: '#adadb0',
      color: '#fff',
      textTransform: 'none',
      height: '50px',
      width: {
        xs: '90%',
        sm: '120px',
      },
      maxWidth: '360px',
      '&:hover': {
        backgroundColor: '#656769',
      },
    }}
  >
    FAQs
  </Button>
</Box>



      </Container>
    </Box>
  );
};

export default Home;
