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

const sopLinks = [
  {
    label: "Representing Perfect Game",
    href: "https://example.com/weather-protocol",
    description:
      "Field Manager's contracted by Perfect Game should represent the company well. We want to ensure our customers have a great experience at this event. Always be professional, courteous, and helpful. Whether you're interacting with coaches, players, or parents, your behavior reflects the values of Perfect Game. Treat everyone with respect and professionalism, as we aim to create a positive environment for all involved.",
  },
  {
    label: "Communicating with Directors",
    href: "",
    description:
      "Over-communicate — it's not only okay, it's appreciated.\n\nDirectors want to be kept in the loop at all times. If you're facing any issues, delays, or unexpected situations, reach out immediately. Even if everything is running smoothly at your assigned field, a quick message to let your Director know things are on track goes a long way. Consistent communication helps the entire event run more efficiently and ensures your team is always aligned.\n\nIf you do not know your event directors contact information, get in touch ASAP with who is giving you your schedule. They will be able to put you in touch. ",
  },
  {
    label: "Red Player on DiamonKast Lineup",
    href: "https://example.com/weather-protocol",
    description:
      "When a player is in red in DiamondKast, it means they have not yet signed a waiver. Follow these steps: \n\n1. Let the coach know their player is in red and ask them to get in touch with the parent to sign the waiver. \n2. Notify the Event Director or Assistant Event Coordinator, so they can go onto the website and re-send the waiver. \n3. Wait until either the coach or PG staff confirms that the player has signed the waiver. \n4. Refresh the app and insert the player into the lineup.",
  },
  {
    label: "Player not Showing up on DiamondKast Lineup",
    href: "https://example.com/weather-protocol",
    description:
      "This indicates the player is either pending PG approval or the coach did not add them to their roster on the Perfect Game website. Follow these steps: \n\n1. Get the player's full name (exact spelling will make this process go much faster). \n2. Contact the Event Director or Assistant Event Director, providing them with the game, team, and player details so they can add the player to the lineup. \n3. Wait until the PG staff confirms that the player is on the roster. \n4. Refresh the app and insert the player into the lineup.",
  },
  {
    label: "Home and Away are Swapped",
    href: "https://example.com/weather-protocol",
    description:
      "If the lineups are in and the home and away teams are swapped on DiamondKast, immediately contact the Event Director for a solution. You will need to stop scoring the game on DiamondKast, go to the 'Notes' application on the iPad or iPhone, and begin writing down what happened. This way, when the issue is fixed, the scoring can be caught up.",
  },
  {
    label: "DiamondKast Stopped Working",
    description:
      'If DiamondKast goes down for any reason, whether it be a bug, connection issue, or an unknown issue. Contact your director to see if they can resolve the issue. In the mean time, go to the "Notes" app on the iPad or iPhone and being noting what happens in the game.',
  },
  {
    label: 'Scoring with the "Notes" app, or with pen in paper.',
    href: "https://example.com/weather-protocol",
    description:
      "If the DiamondKast app goes down, your director may instruct you to begin scoring the game using the Notes app or with pen and paper. In this case, you should record three key items for each pitch: pitch type, pitch speed, and the result of the play. Keep your notes organized and easy to follow so the game can be accurately rescored later. Once the game is complete, send your notes to the director.",
  },
  {
    label: "International Tiebreaker Moder",
    href: "https://example.com/weather-protocol",
    description:
      "When the game goes into the International Tiebreaker rule, in the top left corner of DiamondKast, you will see the toggle of 3 horizontal lines stacked above each other. This is where we can change the game mode. Once the side menu is opened, select and confirm 'Tiebreak Mode.' \n\nThis will place the last three batters out on base, with one out. \n\nBring both coaches to home plate, explain the situation, and alert the coaches who will be on base to start the inning. (The names will be shown in DiamondKast.)",
  },
  {
    label: "Game Protests",
    href: "https://example.com/site-supervisor",
    description:
      "When a team wishes to file a protest during a game, it’s essential to confirm that the protest is not related to a judgment call (such as balls and strikes, safe/out calls, etc.), as judgment calls are not eligible for protest. \n\nSteps to follow: \n1. Before proceeding, confirm with the umpire that the coach is NOT protesting a judgment call. \n2. If it's confirmed that the protest is valid (not related to a judgment call), inform the coach that they must present $100 in cash for the protest to be considered. \n3. Immediately reach out to the Event Director or Assistant Event Coordinator on-site to assist with the protest process. They will help facilitate the protest and make a ruling. \n4. NOTE: Protests must be filed and ruled on before the next pitch if it’s during the game or before the umpires leave the field if it’s after the game. \n\nIf the protest is ruled in the protesting team’s favor, the $100 will be refunded. The ruling made by the committee is final.",
  },
  {
    label: "Ejections and Fights",
    href: "https://example.com/site-supervisor",
    description:
      "When there is an ejection that takes place, or a fight that is starting or has started, immediately contact the event director or assistant event coordinator. They will come to your field immediately to resolve the issue, escort people out as needed, or call the police. \n\nWe want to provide a safe environment for all participants, coaches, and spectators. Ensuring this is handled swiftly and professionally helps maintain the integrity and safety of the event.",
  },
  {
    label: "Stat Corrections",
    href: "https://example.com/weather-protocol",
    description:
      "If you are the person submitting a stat correction, you should reference the video provided in this training to use the correct template. \n\nIf a parent or coach wants to send in a stat correction, they must submit all required information to stats@perfectgame.org for processing.",
  },
  {
    label: "Possible Illegal Bats",
    description:
      "This must be called out by the coach when the player using the bat is at the plate. If it is called out at that time, have the umpire check the bat. If the umpire is unsure, alert the event director to perform a bat inspection.",
  },
  {
    label: "Im stuck, what do I do?",
    href: "https://example.com/weather-protocol",
    description:
      "If you're feeling stuck, overwhelmed, or unsure, simply call or text the Event Director or Assistant Event Coordinator on-site. They will do everything in their power to help you. These events run on teamwork—when everyone works as a cohesive unit, the event runs much more smoothly.",
  },
];

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
                    color: "#00b34f",
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
