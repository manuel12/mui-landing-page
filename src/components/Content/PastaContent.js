import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./pasta-styles.css";

const PastaContent = () => {
  const [pastaImageAnimation, setPastaImageAnimation] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFuncs = {
    "pasta-image": setPastaImageAnimation,
    text: setTextAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".pasta-animation-element", observer);
  }, []);

  return (
    <Box className="pasta-content-background" id="pasta">
      <Container maxWidth="xl">
        <Box className="content pasta-content">
          <Box className="left-content">
            <Zoom in={textAnimation} timeout={2000}>
              <Box id="text" className="text-container pasta-animation-element">
                <Typography variant="h3" align="left" gutterBottom>
                  Pasta like you've never had before
                </Typography>
                <Typography variant="h5" align="left" gutterBottom>
                  Our restaurant serves up pasta like you've never had before.
                  We use only the freshest and highest-quality ingredients,
                  including homemade pasta that's cooked to perfection.
                  <br />
                  <br />
                  Our sauces are made from scratch using traditional Italian
                  recipes and the finest ingredients, resulting in rich and
                  flavorful sauces that perfectly complement our pasta. From
                  spicy arrabbiata to creamy alfredo to tangy lemon butter, our
                  sauces are anything but ordinary. Whether you're a
                  traditionalist or an adventurous foodie, our restaurant has
                  something for everyone.
                  <br />
                  <br />
                  Come in and experience pasta like you've never had before,
                  with bold and exciting flavors that will leave you craving
                  more.
                </Typography>
              </Box>
            </Zoom>
          </Box>
          <Box className="right-content pasta-right-content">
            <Zoom in={pastaImageAnimation} timeout={1400}>
              <Box
                id="pasta-image"
                className="image-container pasta-image-container pasta-animation-element"
              ></Box>
            </Zoom>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PastaContent;
