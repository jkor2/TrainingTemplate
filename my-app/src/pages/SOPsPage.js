import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import pgLogo from "./images/pglogo.png";
import { sopLinks } from "./data";

const SOPsPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
            mb: 1,
          }}
        >
          <Typography variant="h4">
            Standard Operating Procedures (SOPs)
          </Typography>
          <a href="/">
            <img
              src={pgLogo}
              alt="PG Logo"
              style={{ height: "30px", width: "auto" }}
            />
          </a>
        </Box>

        {/* Subheader */}
        <Typography variant="subtitle1" sx={{ mb: 2, color: "#b0bec5" }}>
          Reference procedures to ensure consistency across all events
        </Typography>

        {/* SOP Expandable Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {sopLinks.map((sop, index) => (
            <Accordion
              key={index}
              disableGutters
              sx={{
                backgroundColor: "#002B4C",
                borderRadius: 2,
                boxShadow: "none",
                "&:before": { display: "none" },
                transition: "all 0.2s",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#00b34f" }} />}
                aria-controls={`panel-${index}-content`}
                id={`panel-${index}-header`}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#d0cfcd",
                  }}
                >
                  {sop.label}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  {sop.description.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            mt: 5,
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/quicklinks")}
            sx={{
              flex: 1,
              height: "50px",
              fontSize: { xs: "14px", sm: "16px" },
              textTransform: "none",
              backgroundColor: "#00b34f",
              "&:hover": { backgroundColor: "#029241" },
            }}
          >
            Quick Links
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
            FAQ's
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SOPsPage;
