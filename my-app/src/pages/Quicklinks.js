import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Link as MuiLink,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import pgLogo from "./images/pglogo.png";
import { quickLinks } from "./data";

const QuickLinksPage = () => {
  const navigate = useNavigate();

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
          <Typography variant="h4">Quick Links</Typography>
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
          Click any link to be brought to a new page
        </Typography>

        {/* Quick Links List */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {quickLinks.map((link, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#002B4C",
                color: "#fff",
                borderRadius: 2,
              }}
            >
              <CardContent>
                <MuiLink
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#00b34f",
                    "&:hover": { color: "#029241" },
                  }}
                >
                  {link.label}
                </MuiLink>
                <Typography variant="body2" sx={{ mt: 1, color: "#ccc" }}>
                  {link.description}
                </Typography>
              </CardContent>
            </Card>
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
            onClick={() => navigate(`/additional`)}
            sx={{
              flex: 1,
              height: "50px",
              fontSize: { xs: "14px", sm: "16px" },
              textTransform: "none",
              backgroundColor: "#00b34f",
              "&:hover": { backgroundColor: "#029241" },
            }}
          >
            Supplementary Videos
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
            onClick={() => navigate("/sops")}
            sx={{
              flex: 1,
              height: "50px",
              fontSize: { xs: "14px", sm: "16px" },
              textTransform: "none",
              backgroundColor: "#00b34f",
              "&:hover": { backgroundColor: "#029241" },
            }}
          >
            SOP's
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default QuickLinksPage;
