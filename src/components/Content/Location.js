import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./location-styles.css";

const Location = () => {
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFuncs = {
    text: setTextAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".location-animation-element", observer);
  }, []);

  return (
    <Box className="location-content-background">
      <Container maxWidth="xl" id="location">
        <Zoom in={textAnimation} timeout={2000}>
          <Box
            id="text"
            className="location-content location-animation-element"
          >
            <Typography variant="h3" align="center" gutterBottom>
              Our Location
            </Typography>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96579.32826179624!2d14.18973387930306!3d40.84764021976882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x133b084126d00001%3A0x22f03cedb6fcc79b!2sVia%20Miroballo%20Al%20Pendino%2C%2029%2C%2080138%20Napoli%20NA%2C%20Italy!3m2!1d40.8476614!2d14.2597738!5e0!3m2!1sen!2spl!4v1678652924410!5m2!1sen!2spl"
              loading="lazy"
            ></iframe>
          </Box>
        </Zoom>
      </Container>
    </Box>
  );
};

export default Location;
