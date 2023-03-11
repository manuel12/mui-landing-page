import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Typography, Slide, Zoom } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./styles.css";

const Content = () => {
  return (
    <>
      <Box className="home-content-background" id="home">
        <Container maxWidth="xl">
          <Box className="content home-content">
            <Box className="left-content">
              <Container>
                <Box className="text-container">
                  <Zoom in={true} timeout={2000}>
                    <Typography variant="h5" align="center" gutterBottom>
                      Welcome to
                    </Typography>
                  </Zoom>
                  <Zoom in={true} timeout={2000}>
                    <Typography variant="h1" align="center" gutterBottom>
                      Mario's Pizzeria
                    </Typography>
                  </Zoom>
                  <Zoom in={true} timeout={2000}>
                    <Typography
                      className="text-location"
                      variant="h4"
                      align="center"
                      gutterBottom
                    >
                      ​254 W 27ST ST, NEW YORK, NY 10011
                    </Typography>
                  </Zoom>
                </Box>

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
      </Box>
    </>
  );
};

export default Content;
