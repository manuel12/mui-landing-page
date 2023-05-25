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
      <Box className='about-content-background' id='about'>
        <Container maxWidth='lg'>
          <Box className='content about-content'>
            <Box className='left-content'>
              <Zoom in={aboutImageAnimation} timeout={1400}>
                <div>
                  <Box
                    id='about-image'
                    className='image-container about-image-container about-animation-element'
                  ></Box>
                  <p className='image-credit white'>
                    Image source:{" "}
                    <a
                      target='_blank'
                      href='http://www.francescolastrucci.com/'
                    >
                      Francesco Lastrucci
                    </a>
                    .
                  </p>
                </div>
              </Zoom>
            </Box>
            <Box className='right-content'>
              <Zoom in={textAnimation} timeout={2000}>
                <Box
                  id='text'
                  className='text-container about-animation-element'
                >
                  <Typography variant='h3' align='left' gutterBottom>
                    Our Story
                  </Typography>
                  <Typography variant='h5' align='left' gutterBottom>
                    Our famous Italian pizzeria has a story that's rooted in
                    tradition, passion, and hard work. It all began in a small
                    town in Italy, where our founder, a passionate pizza maker,
                    started making pizzas in a humble kitchen with just a few
                    ingredients. <br />
                    <br />
                    As word of mouth spread about the delicious pizzas, more and
                    more people started coming to try them. Our founder's
                    commitment to quality and use of only the finest ingredients
                    became the hallmark of our pizzeria's success.
                    <br />
                    <br />
                    Over the years, we expanded our reach and opened up new
                    locations, always staying true to our roots and traditional
                    methods of pizza making. Today, we're known around the world
                    for our authentic Italian pizzas, cooked to perfection in
                    wood-fired ovens and served hot and fresh.
                    <br />
                    <br />
                    Our story is one of hard work, dedication, and a love for
                    great pizza that continues to drive us forward. We invite
                    you to come and experience our story for yourself with a
                    slice of our delicious pizza.
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
