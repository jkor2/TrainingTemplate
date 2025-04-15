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
              onClick={() => navigate(`/video/1`)}
              sx={{
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText
                primary="Test"
                secondary="Test2"
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
              backgroundColor: '#FF5722',
              color: '#fff',
              textTransform: 'none',
              height: '50px',
              width: '120px',
              '&:hover': {
                backgroundColor: '#E64A19',
              },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => navigate('/video/1')}
            sx={{
              backgroundColor: '#FF5722',
              color: '#fff',
              textTransform: 'none',
              height: '50px',
              width: '120px',
              '&:hover': {
                backgroundColor: '#E64A19',
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
