import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Slide, Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./pizza-styles.css";

const PizzaContent = () => {
  const [pizzaImageAnimation, setPizzaImageAnimation] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFuncs = {
    "pizza-image": setPizzaImageAnimation,
    text: setTextAnimation,
  };

  const observer = createObserver(animationFuncs);

  useEffect(() => {
    observeElements(".pizza-animation-element", observer);
  }, []);

  return (
    <Box className="pizza-content-background">
      <Container maxWidth="xl">
        <Box className="content pizza-content">
          <Box className="left-content">
            <Slide direction="right" in={pizzaImageAnimation} timeout={1400}>
              <Box
                id="pizza-image"
                className="image-container pizza-image-container pizza-animation-element"
              ></Box>
            </Slide>
          </Box>
          <Box className="right-content" id="pizza">
            <Zoom in={textAnimation} timeout={1600}>
              <Box id="text" className="text-container pizza-animation-element">
                <Typography variant="h3" align="center" gutterBottom>
                  The best pizza in town
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
        </Box>
      </Container>
    </Box>
  );
};

export default PizzaContent;
