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
    <Box className="pasta-content-background">
      <Container maxWidth="xl">
        <Box className="content pasta-content">
          <Box className="left-content" id="pasta">
            <Zoom in={textAnimation} timeout={2000}>
              <Box id="text" className="text-container pasta-animation-element">
                <Typography variant="h3" align="center" gutterBottom>
                  Pasta like you've never had before
                </Typography>
                <Typography variant="h5" align="center" gutterBottom>
                  Voluptatem sint perferendis quas eveniet. Saepe maiores sequi
                  ipsam similique iusto iste est. Unde tempora voluptatem
                  laborum assumenda alias nisi. Repellat laborum accusantium
                  dolore dolor laboriosam. Quod recusandae dolorem quasi fuga
                  alias.
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
