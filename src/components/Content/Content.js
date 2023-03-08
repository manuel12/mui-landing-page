import React from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./styles.css";

const Content = () => {
  return (
    <Container maxWidth="xl">
      <Box className="content">
        <Box className="left-content">
          <Container>
            <Box className="text-container">
              <Typography variant="h3" align="left" gutterBottom>
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
            <Box className="action-buttons-container">
              <Button className="action-button">reservation</Button>
              <Button className="action-button">view menu</Button>
            </Box>
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
          </Container>
        </Box>
        <Box className="right-content">
          <Container>
            <Box className="image-container"></Box>
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default Content;
