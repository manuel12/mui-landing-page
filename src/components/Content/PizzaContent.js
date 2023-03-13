import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

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
            <Zoom in={pizzaImageAnimation} timeout={1400}>
              <Box
                id="pizza-image"
                className="image-container pizza-image-container pizza-animation-element"
              ></Box>
            </Zoom>
          </Box>
          <Box className="right-content" id="pizza">
            <Zoom in={textAnimation} timeout={2000}>
              <Box id="text" className="text-container pizza-animation-element">
                <Typography variant="h3" align="left" gutterBottom>
                  The best pizza in town
                </Typography>
                <Typography variant="h5" align="left" gutterBottom>
                  Looking for the best pizza in town? Look no further than our
                  pizzeria.
                  <br />
                  <br />
                  Our expert chefs use only the freshest and highest-quality
                  ingredients to make our pizzas, ensuring that every slice is
                  bursting with flavor.
                  <br />
                  <br />
                  Whether you dine in or order takeout, you can always count on
                  our pizza to be hot, fresh, and absolutely delicious. Our
                  passion for pizza shines through in every bite, and we're
                  confident that once you try our pizza, you won't want to go
                  anywhere else.
                  <br />
                  <br />
                  Come in and taste the difference for yourself. Our pizza truly
                  is the best in town.
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
