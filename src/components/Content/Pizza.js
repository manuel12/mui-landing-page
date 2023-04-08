import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Zoom } from "@mui/material";

import { createObserver, observeElements } from "../../utils";
import "./styles.css";
import "./pizza-styles.css";

const Pizza = () => {
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
    <Box className="pizza-content-background" id="pizza">
      <Container maxWidth="lg">
        <Box className="content pizza-content">
          <Box className="left-content">
            <Zoom in={pizzaImageAnimation} timeout={1400}>
              <div>
                <Box
                  id="pizza-image"
                  className="image-container pizza-image-container pizza-animation-element"
                ></Box>
                <p className="image-credit white">
                  Image source:{" "}
                  <a target="_blank" href="https://www.gettyimages.com/">
                    Getty Images
                  </a>
                  .
                </p>
              </div>
            </Zoom>
          </Box>
          <Box className="right-content">
            <Zoom in={textAnimation} timeout={2000}>
              <Box id="text" className="text-container pizza-animation-element">
                <Typography variant="h3" align="left" gutterBottom>
                  The best pizza in town
                </Typography>
                <Typography variant="h5" align="left" gutterBottom>
                  Our pizzeria is home to the best pizza in town. We use only
                  the freshest and highest-quality ingredients to make our
                  pizzas, from our homemade dough that's crispy on the outside
                  and chewy on the inside to our tangy tomato sauce and
                  carefully selected cheeses.
                  <br />
                  <br />
                  Our expert chefs take great care in making each pizza to
                  perfection, ensuring that every slice is bursting with flavor.
                  We offer a variety of delicious toppings, from classic
                  pepperoni and sausage to more unique options like spinach,
                  feta, and roasted garlic.
                  <br />
                  <br />
                  Whether you dine in or order takeout, you can always count on
                  our pizza to be hot, fresh, and absolutely delicious. Our
                  passion for pizza shines through in every bite, and we're
                  confident that once you try our pizza, you won't want to go
                  anywhere else
                  <br />
                  <br />
                  Come in and taste the difference for yourself. Our pizza truly
                  is the best in town, and we can't wait to share it with you.
                </Typography>
              </Box>
            </Zoom>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Pizza;
