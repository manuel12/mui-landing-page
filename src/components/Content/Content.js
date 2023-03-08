import React from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";

import "./styles.css";

const Content = () => {
  return (
    <Container maxWidth="xl">
      <Box className="content">
        <Box className="left-content">
          <Container>
            <Zoom in={true} timeout={2000}>
              <Box className="text-container">
                <Typography variant="h5" align="center" gutterBottom>
                  Welcome to
                </Typography>
                <Typography variant="h1" align="center" gutterBottom>
                  Mario's Pizzeria
                </Typography>
                <Typography
                  className="text-location"
                  variant="h4"
                  align="center"
                  gutterBottom
                >
                  ​254 W 27ST ST, NEW YORK, NY 10011
                </Typography>
              </Box>
            </Zoom>

            <Slide direction="right" in={true} timeout={1100}>
              <Box className="action-buttons-container">
                <Button className="action-button">reservation</Button>
                <Button className="action-button">view menu</Button>
              </Box>
            </Slide>

            <Slide direction="left" in={true} timeout={1100}>
              <Box className="social-buttons-container">
                <Button className="social-button">
                  <FacebookIcon className="social-icon" />
                </Button>
                <Button className="social-button">
                  <InstagramIcon className="social-icon" />
                </Button>
                <Button className="social-button">
                  <TwitterIcon className="social-icon" />
                </Button>
              </Box>
            </Slide>
          </Container>
        </Box>
        <Box className="right-content">
          <Container>
            <Zoom in={true} timeout={1400}>
              <Box className="image-container"></Box>
            </Zoom>
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default Content;
