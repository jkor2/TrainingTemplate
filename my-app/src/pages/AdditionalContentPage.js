import React, { useState } from 'react';
import { Box, Container, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pgLogo from './images/pglogo.png';
import videoData from './data';

const AdditionalContentPage = () => {
  const navigate = useNavigate();
  const lastVideoId = videoData[videoData.length - 1].id;
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 56, 100, 1)', minHeight: '100vh', py: 4, color: '#fff' }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h4">Supplementary Content</Typography>
          <a href="/"><img src={pgLogo} alt="PG Logo" style={{ height: '30px', width: 'auto' }} /></a>
        </Box>

        {/* Subheader */}
        <Typography variant="subtitle1" sx={{ mb: 3, color: '#b0bec5' }}>
          Watch this additional training below, this includes various scenarios from the previous released training. 
        </Typography>

        {/* Loading Spinner */}
        {!iframeLoaded && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <CircularProgress sx={{ color: '#00b34f' }} />
          </Box>
        )}

        {/* Google Slides Embed */}
        <Box sx={{ display: iframeLoaded ? 'flex' : 'none', justifyContent: 'center', mb: 4 }}>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRkudukHSL3ZEPlBPt2gS5LTF5p6jUlmj0HWLsAi6OCgukdNzrXMJEmKw7uN2Hj9Hqi1j7DPycNOew2/pubembed?start=false&loop=false&delayms=60000"
            frameBorder="0"
            width="960"
            height="569"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            title="Google Slides Training"
            onLoad={() => setIframeLoaded(true)}
          />
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mt: 5, gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => navigate(`/video/${lastVideoId}`)}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#00b34f',
              '&:hover': { backgroundColor: '#029241' },
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
            onClick={() => navigate('/quicklinks')}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#00b34f',
              '&:hover': { backgroundColor: '#029241' },
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AdditionalContentPage;
