import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import pgLogo from "./images/pglogo.png";

const FeedbackPage = () => {
  const [loading, setLoading] = useState(true); // track loading
  const navigate = useNavigate();

  // Function to handle the onLoad event for the iframe
  const handleIframeLoad = () => {
    setLoading(false); 
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 56, 100, 1)",
        minHeight: "100vh",
        py: 4,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4">Feedback</Typography>
          <a href="/">
            <img
              src={pgLogo}
              alt="PG Logo"
              style={{ height: "30px", width: "auto" }}
            />
          </a>
        </Box>

        {/* Subheader */}
        <Typography variant="subtitle1" sx={{ mb: 3, color: "#b0bec5" }}>
          Please let us know how we can improve this training.
        </Typography>

        {/* Form */}
        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            borderRadius: 2,
            overflow: "hidden",
            p: 2,
            mb: 5,
            boxShadow: 3,
            position: "relative", // Make sure we can position the loading icon correctly
          }}
        >
          {/* Loading spinner */}
          {loading && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScHUktSmJXr4PaH_g-MNgMMmGQYkAuFGJ3HXe7G0CfdFyKBPA/viewform?embedded=true"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Feedback Form"
            style={{ borderRadius: "8px" }}
            onLoad={handleIframeLoad} // Set loading to false when the iframe loads
          >
            Loading…
          </iframe>
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/faqs")}
            sx={{
              flex: 1,
              height: "50px",
              fontSize: { xs: "14px", sm: "16px" },
              textTransform: "none",
              backgroundColor: "#00b34f",
              "&:hover": { backgroundColor: "#029241" },
            }}
          >
            Previous
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/overview")}
            sx={{
              flex: 1,
              height: "50px",
              fontSize: { xs: "14px", sm: "16px" },
              textTransform: "none",
              backgroundColor: "#fff",
              color: "rgba(0, 56, 100, 1)",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            Back to Overview
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeedbackPage;
