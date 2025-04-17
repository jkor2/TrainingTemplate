import React from 'react';
import { Box, Container, Typography, Button, IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';


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
        flexDirection: 'column',
      }}
    >
      <Container maxWidth="md">
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <img
            src={require('./images/pglogomain.png')}
            alt="PG Logo"
            style={{
              maxWidth: '75%',
              height: 'auto',
              maxHeight: '150px',
            }}
          />
        </Box>

        {/* Welcome Text */}
        <Typography variant="h3" align="center" gutterBottom>
          Field Manager Training
        </Typography>

        {/* Start Training Button */}
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
                xs: '90%',
                sm: '390px',
              },
              maxWidth: '400px',
              '&:hover': {
                backgroundColor: '#029241',
              },
            }}
          >
            Start Training
          </Button>
        </Box>

        {/* Secondary Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
            flexDirection: {
              xs: 'column',
              sm: 'row',
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

        {/* YouTube Icon */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
    {/* YouTube Button */}
    <Tooltip title="Check out PG-Training">
      <Button
        href="https://www.youtube.com/@PG-Training/playlists"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<YouTubeIcon sx={{ color: 'red' }} />}
        sx={{
          backgroundColor: '#fff',
          color: 'black',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          px: 2,
          py: 1,
          borderRadius: 2,
          '&:hover': {
            backgroundColor: '#ddd',
          },
        }}
      >
        Youtube Scoring Playlist
      </Button>
    </Tooltip>

    {/* Google Slides Button */}
    <Tooltip title="Open Google Slides Training">
      <Button
        href="https://docs.google.com/presentation/d/1BxASsD5hNYdDeXwPydeglQuqZBg8iMmvUOO9yDER0Lw/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path fill="#fbbc04" d="M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V10z"/>
            <path fill="#fff" d="M14 16h20v16H14z"/>
            <path fill="#fbbc04" d="M18 20h12v8H18z"/>
          </svg>
        }
        sx={{
          backgroundColor: '#fff',
          color: 'black',
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          px: 2,
          py: 1,
          borderRadius: 2,
          '&:hover': {
            backgroundColor: '#ddd',
          },
        }}
      >
        Google Slides Training
      </Button>
    </Tooltip>
  </Box>
</Box>


      </Container>
    </Box>
  );
};

export default Home;
