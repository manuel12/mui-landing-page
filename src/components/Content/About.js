import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./about-styles.css";

const About = () => {
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFuncs = {
    text: setTextAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".about-animation-element", observer);
  }, []);

  return (
    <>
      <Box className="about-content-background" id="about">
        <Container maxWidth="xl">
          <Zoom in={textAnimation} timeout={2000}>
            <Box id="text" className="about-content about-animation-element">
              <Typography variant="h3" align="center" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="h5" align="center" gutterBottom>
                Voluptatem sint perferendis quas eveniet. Saepe maiores sequi
                ipsam similique iusto iste est. Unde tempora voluptatem laborum
                assumenda alias nisi. Repellat laborum accusantium dolore dolor
                laboriosam. Quod recusandae dolorem quasi fuga alias.
              </Typography>
            </Box>
          </Zoom>
        </Container>
      </Box>
    </>
  );
};

export default About;
