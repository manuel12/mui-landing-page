import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./about-styles.css";

const About = () => {
  const [aboutImageAnimation, setAboutImageAnimation] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFuncs = {
    "about-image": setAboutImageAnimation,
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
          <Box className="content about-content">
            <Box className="left-content">
              <Zoom in={aboutImageAnimation} timeout={1400}>
                <Box
                  id="about-image"
                  className="image-container about-image-container about-animation-element"
                ></Box>
              </Zoom>
            </Box>
            <Box className="right-content">
              <Zoom in={textAnimation} timeout={2000}>
                <Box id="text" className="text-container about-animation-element">
                  <Typography variant="h3" align="left" gutterBottom>
                    Our Story
                  </Typography>
                  <Typography variant="h5" align="left" gutterBottom>
                    Our famous Italian pizzeria started from humble beginnings
                    in a small town in Italy. <br />
                    <br />
                    With a passion for pizza and a dedication to using only the
                    finest ingredients, we quickly gained a loyal following.
                    Word spread about our delicious pizzas, and before long, we
                    were the talk of the town. As our reputation grew, we
                    expanded to new locations and perfected our craft, always
                    staying true to our roots.
                    <br />
                    <br />
                    Today, we are known around the world for our authentic
                    Italian pizzas and commitment to quality. Our story is one
                    of passion, hard work, and a love for great pizza that
                    continues to this day.
                  </Typography>
                </Box>
              </Zoom>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
