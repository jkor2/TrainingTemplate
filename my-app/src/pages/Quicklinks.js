import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Link as MuiLink } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pgLogo from './images/pglogo.png';
import videoData from './data';

const quickLinks = [
  {
    label: 'Perfect Game Events by Region',
    href: 'https://www.perfectgame.org/Schedule/FeaturedGroups.aspx?PrtID=270',
    description: 'Bring up the all events broken into their region, for quickly navigating to your event.',
  },
  {
    label: 'DiamondKast Academy',
    href: 'https://www.diamondkast.com/tutorials?section=welcome-slides',
    description: 'Bring up the learn to score page, quickly search for a specific play to score.',
  },
  {
    label: 'High School Rules',
    href: 'https://docs.google.com/document/d/1xFVPjM3KSPNtGsmTMIe8ssc1TIwIBVmVKMysMAudpUk/edit?usp=sharing',
    description: 'View the current High School rules for a Perfect Game event. Updated 4/15/2025.',
  },
  {
    label: 'Youth Rules',
    href: 'https://docs.google.com/document/d/1MYL_yzVFmDszPofIK6E9f8h3iz2ZmruPz00nFP_aU-E/edit?usp=sharing',
    description: 'View the current Youth rules for a Perfect Game event. Updated 4/15/2025.',
  },
  {
    label: 'High School Pitching Rules',
    href: 'https://docs.google.com/document/d/1adUCoicH3_xET9nrceuTZv-FV-cPRz--t9nDkkTc7aY/edit?usp=sharing',
    description: 'View the current High School Pitching rules for a Perfect Game event. Updated 4/15/2025.',
  },
  {
    label: 'Youth Pitching Rules',
    href: 'https://docs.google.com/document/d/1qdzg-k43krilbtOdBDoHB82jGiubtrYeNctHETPA2IE/edit?usp=sharing',
    description: 'View the current Youth Pitching rules for a Perfect Game event. Updated 4/15/2025.',
  },
  // Add more as needed
];

const QuickLinksPage = () => {
  const navigate = useNavigate();
  const lastVideoId = videoData[videoData.length - 1].id;

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 56, 100, 1)', minHeight: '100vh', py: 4, color: '#fff' }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h4">Quick Links</Typography>
          <img src={pgLogo} alt="PG Logo" style={{ height: '30px', width: 'auto' }} />
        </Box>

        {/* Subheader */}
        <Typography variant="subtitle1" sx={{ mb: 2, color: '#b0bec5' }}>
          Click any link to be brought to a new page
        </Typography>

        {/* Quick Links List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {quickLinks.map((link, index) => (
            <Card key={index} sx={{ backgroundColor: '#002B4C', color: '#fff', borderRadius: 2 }}>
              <CardContent>
                <MuiLink
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#00b34f',
                    '&:hover': { color: '#029241' },
                  }}
                >
                  {link.label}
                </MuiLink>
                <Typography variant="body2" sx={{ mt: 1, color: '#ccc' }}>
                  {link.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
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
            onClick={() => navigate('/sops')}
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

export default QuickLinksPage;
