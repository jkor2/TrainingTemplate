import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import pgLogo from './images/pglogo.png';

const FAQsPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 56, 100, 1)', minHeight: '100vh', color: '#fff', py: 3 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h4">Frequently Asked Questions (FAQs)</Typography>
          <img src={pgLogo} alt="PG Logo" style={{ height: '30px', width: 'auto' }} />
        </Box>

        {/* Content Placeholder */}
        <Typography variant="body1" mt={3} color="gray">
          This section will address commonly asked questions regarding event operations and staff responsibilities.
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mt: 4, gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/sops')}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#FF5722',
              '&:hover': { backgroundColor: '#E64A19' },
            }}
          >
            Previous
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate('/overview')}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#fff',
              color: 'rgba(0, 56, 100, 1)',
              '&:hover': { backgroundColor: '#e0e0e0' },
            }}
          >
            Back to Overview
          </Button>

          <Button
            variant="contained"
            disabled
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#FF5722',
              '&:hover': { backgroundColor: '#E64A19' },
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQsPage;
