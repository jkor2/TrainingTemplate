import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import videoData from './data';

const Overview = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 56, 100, 1)',
        color: '#fff',
        py: 3,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Training Overview
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Choose a video to start watching, or select "Start" at the bottom of the page, to being at video one.
        </Typography>

        {/* Video List */}
        <List sx={{ mt: 0 }}>
          {videoData.map((video) => (
            <ListItem
              key={video.id}
              button
              onClick={() => navigate(`/video/${video.id}`)}
              sx={{
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText
                primary={video.title}
                secondary={video.description}
                primaryTypographyProps={{ sx: { color: '#fff', fontWeight: 'bold' } }}
                secondaryTypographyProps={{ sx: { color: '#ccc' } }}
              />
            </ListItem>
          ))}
        </List>
        <List>

        {/*CUSTOM LIST ITEMS-------------------------------------------------------------------------------------*/}
        <ListItem
              key={1}
              button
              onClick={() => navigate(`/quicklinks`)}
              sx={{
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText
                primary="Quick Links & Rescources"
                secondary="This page will provide quick access to important links and helpful resources for easy navigation and support."
                primaryTypographyProps={{ sx: { color: '#fff', fontWeight: 'bold' } }}
                secondaryTypographyProps={{ sx: { color: '#ccc' } }}
              />
            </ListItem>
            <ListItem
              key={1}
              button
              onClick={() => navigate(`/sops`)}
              sx={{
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText
                primary="Standard Operating Procedures (SOP's)"
                secondary="This page will outline the Standard Operating Procedures (SOPs) to ensure consistency and clarity in daily operations."
                primaryTypographyProps={{ sx: { color: '#fff', fontWeight: 'bold' } }}
                secondaryTypographyProps={{ sx: { color: '#ccc' } }}
              />
            </ListItem>
            <ListItem
              key={1}
              button
              onClick={() => navigate(`/faqs`)}
              sx={{
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText
                primary="FAQs"
                secondary="This page will provide answers to frequently asked questions by customers to help you find quick solutions and clarify common inquiries."
                primaryTypographyProps={{ sx: { color: '#fff', fontWeight: 'bold' } }}
                secondaryTypographyProps={{ sx: { color: '#ccc' } }}
              />
            </ListItem>
        </List>

        {/* ------------------------------------------------------------------------------------------------------ */}

        {/* Navigation Buttons */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={5}>
          <Button
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#00b34f',
              color: '#fff',
              textTransform: 'none',
              height: '50px',
              width: '120px',
              '&:hover': {
                backgroundColor: '#029241',
              },
            }}
          
          >
            Home
          </Button>
          <Button
            onClick={() => navigate('/video/1')}
            sx={{
              backgroundColor: '#00b34f',
              color: '#fff',
              textTransform: 'none',
              height: '50px',
              width: '120px',
              '&:hover': {
                backgroundColor: '#029241',
              },
            }}
          >
            Start
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Overview;
