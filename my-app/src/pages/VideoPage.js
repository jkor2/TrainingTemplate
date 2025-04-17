import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, LinearProgress, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import videoData from './data';
import pgLogo from './images/pglogo.png';
import beforeImage from './images/before.jpeg';
import afterImage from './images/after.jpeg';
import academyGif from './images/dkAcademy.gif'; // ✅ Import your GIF here

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videoData.find(v => v.id === parseInt(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [id]);

  if (!video) {
    return <Typography variant="h5">Video not found</Typography>;
  }

  const progress = (video.id / videoData.length) * 100;

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 56, 100, 1)', minHeight: '100vh', color: '#fff', py: 3 }}>
      <Container maxWidth="md">

        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h4" gutterBottom>{video.title}</Typography>
          <a href="/"><img src={pgLogo} alt="PG Logo" style={{ height: '30px' }} /></a>
        </Box>

                {/* Progress Bar */}
         <Box sx={{ mt: 1, mb:2 }}>
          <Typography variant="body2" sx={{ mb: .5 }}>
            Progress: {Math.round(progress)}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 5,
              borderRadius: 6,
              backgroundColor: '#ccc',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#00b34f',
              },
            }}
          />
        </Box>

        {/* Conditional Video/Image/GIF Content */}
        {video.title === "DiamondKast - Batter Pre Pitch Plays" ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
            <img src={beforeImage} alt="Before" style={{ width: '35%', marginRight: '10px' }} />
            <Typography variant="h4" sx={{ marginX: '10px' }}>&#8594;</Typography>
            <img src={afterImage} alt="After" style={{ width: '35%' }} />
          </Box>
        ) : video.title === "DiamondKast Academy" ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
            <img
              src={academyGif}
              alt="DiamondKast Academy Demo"
              style={{ maxWidth: '100%', borderRadius: '10px' }}
            />
          </Box>
        ) : (
          <Box sx={{ position: 'relative', paddingTop: '65%', mb: 3 }}>
            {loading && (
              <Box sx={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1
              }}>
                <CircularProgress size={50} sx={{ color: '#00b34f' }} />
              </Box>
            )}
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              onLoad={() => setLoading(false)}
            />
          </Box>
        )}

        {/* Description Section */}
        <Typography variant="body1" mt={3}>
          {video.title === "DiamondKast Academy" ? (
            <>
  <Typography variant="body1" paragraph>
    <strong>diamondkast.com</strong> was created to help scorers better understand each individual function of DiamondKast. 
    This site should be used as your <strong>GO TO</strong> onsite resource when you are unsure of how to score a particular play.
  </Typography>

  <Typography variant="body1" paragraph>
    Here are the features provided by <strong>DiamondKast Academy</strong>:
  </Typography>

  <ul style={{ marginLeft: '1.5rem' }}>
    <li>
      <Typography variant="body1">
        <strong>Searchable Play</strong> – If you do not know how to score a strike, you can search <em>strikeout</em> to get the resource.
      </Typography>
    </li>
    <li>
      <Typography variant="body1">
        <strong>Video Walkthrough</strong> – Each scoring resource contains a video walkthrough.
      </Typography>
    </li>
    <li>
      <Typography variant="body1">
        <strong>Step by Step</strong> – Each scoring resource contains a step-by-step guide under the video, with images.
      </Typography>
    </li>
  </ul>

  <Typography variant="body1" paragraph sx={{ mt: 2 }}>
    Check out{' '}
    <a
      href="https://www.diamondkast.com/tutorials?section=welcome-slides"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#00b34f', textDecoration: 'none', fontWeight: 'bold' }}
    >
      DiamondKast Academy
    </a>{' '}
    to learn more.
  </Typography>
</>

          ) : video.title === "DiamondKast - Batter Pre Pitch Plays" ? (
            <>
              In the bottom right, selecting "Batter Pre-Pitch" will bring a pop-up with the following options:
              <ul>
                <li><strong>Automatic Out</strong> - Will automatically retire the batter and add 1 out to the box score.</li>
                <li><strong>Illegal Action Without Pitch</strong> - Will automatically retire the batter and add 1 out to the box score.</li>
                <li><strong>Intentional Walk</strong> - Will automatically move the batter to first, and advance a current runner 1 base if they are on first.</li>
                <li><strong>Skip Batter</strong> - Will skip the current batter at the plate, bringing up the next batter.</li>
              </ul>
            </>
          ) : (
            video.description
          )}
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mt: 4, gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => {
              if (video.id === 1) navigate('/overview');
              else navigate(`/video/${video.id - 1}`);
            }}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#00b34f',
              '&:hover': { backgroundColor: '#029241' },
            }}
          >
            {video.id === 1 ? "Back to Overview" : "Previous"}
          </Button>
          {video.id == 1 ? "" :           <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <Button
              component={Link}
              to="/overview"
              variant="contained"
              disabled={video.id === 1}
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
          </Box>}


          <Button
            variant="contained"
            onClick={() => {
              if (video.id === videoData.length) navigate('/additional');
              else navigate(`/video/${video.id + 1}`);
            }}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#00b34f',
              '&:hover': { backgroundColor: '#029241' },
            }}
          >

            {video.id === videoData.length ? "Supplementary Videos" : "Next"}
            
          </Button>
        </Box>


      </Container>
    </Box>
  );
};

export default VideoPage;
