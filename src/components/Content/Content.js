import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Button, Typography, Slide, Zoom } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";

const Content = () => {
  const [nameAnimation, setNameAnimation] = useState(false);
  const [locationAnimation, setLocationAnimation] = useState(false);
  const [welcomeAnimation, setWelcomeAnimation] = useState(false);

  const [actionButtonsAnimation, setActionButtonsAnimation] = useState(false);
  const [socialButtonsAnimation, setSocialButtonsAnimation] = useState(false);

  const [imageAnimation, setImageAnimation] = useState(false);

  const animationFuncs = {
    name: setNameAnimation,
    "location-text": setLocationAnimation,
    welcome: setWelcomeAnimation,
    action: setActionButtonsAnimation,
    social: setSocialButtonsAnimation,
    "home-image": setImageAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".animation-element", observer);
  }, []);

  return (
    <>
      <Box className="home-content-background" id="home">
        <Container maxWidth="xl">
          <Box className="content home-content">
            <Box className="left-content">
              <Container>
                <Box className="text-container">
                  <Zoom in={welcomeAnimation} timeout={2000}>
                    <Typography
                      variant="h5"
                      align="left"
                      id="welcome"
                      className="animation-element"
                      gutterBottom
                    >
                      Welcome to
                    </Typography>
                  </Zoom>

                  <Zoom in={nameAnimation} timeout={2000}>
                    <Typography
                      variant="h1"
                      align="left"
                      id="name"
                      className="animation-element"
                      gutterBottom
                    >
                      Mario's Pizzeria
                    </Typography>
                  </Zoom>
                  <Zoom in={locationAnimation} timeout={2000}>
                    <Typography
                      id="location-text"
                      className="text-location animation-element"
                      variant="h4"
                      align="left"
                      gutterBottom
                    >
                      ???254 W 27ST ST, NEW YORK, NY 10011
                    </Typography>
                  </Zoom>
                </Box>

                <Slide
                  direction="right"
                  in={actionButtonsAnimation}
                  timeout={1100}
                >
                  <Box
                    className="action-buttons-container animation-element"
                    id="action"
                  >
                    <Button className="action-button">reservation</Button>
                    <Button className="action-button">view menu</Button>
                  </Box>
                </Slide>

                <Slide
                  direction="right"
                  in={socialButtonsAnimation}
                  timeout={1100}
                >
                  <Box
                    className="social-buttons-container animation-element"
                    id="social"
                  >
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
                <Zoom in={imageAnimation} timeout={1400}>
                  <Box
                    className="image-container animation-element"
                    id="home-image"
                  ></Box>
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
