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
    <Box className="location-content-background" id="location">
      <Container maxWidth="lg">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.1054619685465!2d14.2599663!3d40.8476083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b084127547a0f%3A0xb22f03e0b7d553f2!2sVia%20Miroballo%20Al%20Pendino%2C%2030%2C%2080138%20Napoli%20NA%2C%20Italy!5e0!3m2!1sen!2spl!4v1678801894857!5m2!1sen!2spl"
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
