import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./location-styles.css";

const Location = () => {
  const [locationIframeAnimation, setLocationIframeAnimation] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFuncs = {
    "location-iframe": setLocationIframeAnimation,
    text: setTextAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".location-animation-element", observer);
  }, []);

  return (
    <Box className="location-content-background">
      <Container maxWidth="xl" id="location">
        <Box
          id="text"
          className="content location-content location-animation-element"
        >
          <Box className="left-content">
            <Zoom in={textAnimation} timeout={2000}>
              <Box className="text-container">
                <Typography variant="h3" align="left" gutterBottom>
                  Our Location
                </Typography>
                <Typography variant="h5" align="left" gutterBottom>
                  Our famous Italian pizzeria is situated in the heart of the
                  city, with a prime location that's easily accessible and
                  surrounded by plenty of parking options.
                  <br />
                  <br />
                  Whether you're a local or a tourist, our convenient location
                  makes it easy to stop by and enjoy our delicious pizzas.
                </Typography>
              </Box>
            </Zoom>
          </Box>
          <Box className="right-content">
            <Zoom in={locationIframeAnimation} timeout={1400}>
              <iframe
                id="location-iframe"
                className="map location-animation-element"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96579.32826179624!2d14.18973387930306!3d40.84764021976882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x133b084126d00001%3A0x22f03cedb6fcc79b!2sVia%20Miroballo%20Al%20Pendino%2C%2029%2C%2080138%20Napoli%20NA%2C%20Italy!3m2!1d40.8476614!2d14.2597738!5e0!3m2!1sen!2spl!4v1678652924410!5m2!1sen!2spl"
                loading="lazy"
              ></iframe>
            </Zoom>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Location;
