import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import OverviewPage from './pages/Overview';
import QuickLinksPage from './pages/Quicklinks';
import SOPsPage from './pages/SOPsPage';
import FAQsPage from './pages/FAQsPage';
import FeedbackPage from './pages/FeedbackPage';
import AdditionalContentPage from './pages/AdditionalContentPage';

const theme = createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif", // Default body font
    h1: {
      fontFamily: "'Bebas Neue', sans-serif", // Headline font for h1
    },
    h2: {
      fontFamily: "'Bebas Neue', sans-serif", // Headline font for h2
    },
    h3: {
      fontFamily: "'Bebas Neue', sans-serif", // Headline font for h3
    },
    h4: {
      fontFamily: "'Bebas Neue', sans-serif", // Headline font for h4
    },
    h5: {
      fontFamily: "'Bebas Neue', sans-serif", // Headline font for h5
    },
    h6: {
      fontFamily: "'Bebas Neue', sans-serif", // Headline font for h6
    },
    subtitle1: {
      fontFamily: "'Source Sans Pro', sans-serif", // Body font for subtitle1
    },
    subtitle2: {
      fontFamily: "'Source Sans Pro', sans-serif", // Body font for subtitle2
    },
    body1: {
      fontFamily: "'Source Sans Pro', sans-serif", // Body font for body1
    },
    body2: {
      fontFamily: "'Source Sans Pro', sans-serif", // Body font for body2
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/quicklinks" element={<QuickLinksPage />} />
          <Route path="/sops" element={<SOPsPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/additional" element={<AdditionalContentPage />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
