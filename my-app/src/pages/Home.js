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
          DiamondKast Training
        </Typography>

        {/* Start Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="error" onClick={() => navigate('/overview')}>
            Start Training
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
