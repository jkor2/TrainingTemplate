import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import pgLogo from './images/pglogo.png';

const faqData = [
  {
    question: 'What time should I arrive at my site?',
    answer: 'You should arrive at least 60 minutes before the first scheduled game time. This will be marked in the WhenIWork app.',
  },
  {
    question: 'Who do I contact if a team is late?',
    answer: 'Immediately contact your Event Director or Assistant Event Coordinator for guidance.',
  },
  {
    question: 'Who do I contact if an umpire is late?',
    answer: 'Immediately contact your Event Director or Assistant Event Coordinator for guidance.',
  },
  {
    question: 'Do I need to bring my own equipment?',
    answer: 'No, all the equipment needed to perform the functions of a Field Manager will be provided.'
  },
  {
    question: 'What should I bring?',
    answer: 'Bring what you think you will need. Typically, this will include water, snacks & food, and the proper clothing for the day’s weather.'
  },
  {
    question: 'What should I wear?',
    answer: 'Wear comfortable clothing that is appropriate for the weather. If you have PG attire, you can wear that. Please do not wear any tank tops or open-toed shoes.'
  },
  {
    question: 'When does the clock start for the game?',
    answer: 'The gameclock ticks upwards, meaning it starts from 0 and goes up to the games time limit. This is started on the first pitch of the game'
  },
  {
    question: 'DiamondKast stopped working, what do I do?',
    answer: 'If DiamondKast goes down for any reason, whether it be a bug, connection issue, or an unknown issue. Contact your director to see if they can resolve the issue. In the mean time, go to the "Notes" app on the iPad or iPhone and being noting what happens in the game.'
  },
  {
    question: 'A Parent/Coach says the Pitchcount or Game Stats are incorrect, what do I do?',
    answer: 'Direct the Parent/Coach to send an email to stats@perfectgame.org. Ensure they include the gameID and what exactly the issue is. If the pitch count is incorrect, let the director know so they can make a note of the situation to reduce the chance of a misunderstanding in future games of the event.'
  },
  {
    question: 'A Parent/Coach says there is an incorrect highlight clip, what do I do?',
    answer: 'When watching a highlight clip, at the bottom of the video there is an option to report an issue. Direct them to click on that and explain what the problem is. This will send an auto-generated ticket to the DK+ support team to fix.' 
   },
   {
    question: 'A Parent/Coach says they cannot see the livestream, what do I do?',
    answer: 'In between innings, open up the steam box and check if the livestream is displaying live on the PG Broadcaster App. Sometimes the streaming phone will overheat or enter a rest mode. If this is the case, restart the stream. If the PG Broadcaster app is showing it is still live, contact the event director so they can get in contact with the live streaming team. If your field has a hardwired camera that automatically streams the games, get in contact with your event director.'
  },
  {
    question: 'A Parent/Coach says the other team is using an illegal bat, what do I do?',
    answer: 'This must be called out by the coach when the player using the bat is at the plate. If it is called out at that time, have the umpire check the bat. If the umpire is unsure, alert the event director to perform a bat inspection.'
  },
  // Add more FAQs as needed
];

const FAQsPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 56, 100, 1)', minHeight: '100vh', py: 4, color: '#fff' }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h4">Frequently Asked Questions (FAQs)</Typography>
          <a href="/"><img src={pgLogo} alt="PG Logo" style={{ height: '30px', width: 'auto' }} /></a>
        </Box>

        {/* FAQ List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: '#002B4C',
                color: '#fff',
                borderRadius: 2,
                '&::before': { display: 'none' }, // removes default divider line
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#00b34f' }} />}>
                <Typography sx={{ fontWeight: 'bold', color: '#00b34f' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#ccc' }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            mt: 5,
            gap: 2,
          }}
        >
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
            SOP's
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

        </Box>
      </Container>
    </Box>
  );
};

export default FAQsPage;
