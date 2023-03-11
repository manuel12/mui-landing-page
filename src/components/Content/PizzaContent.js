import React from "react";
import { Box, Container } from "@mui/system";
import { Slide, Typography, Zoom } from "@mui/material";
import "./styles.css";
import "./pizza-styles.css";

const PizzaContent = () => {
  return (
    <Box className="pizza-content-background">
      <Container maxWidth="xl">
        <Box className="content pizza-content">
          <Box className="left-content">
            <Zoom in={true} timeout={1400}>
              <Box className="image-container pizza-image-container"></Box>
            </Zoom>
          </Box>
          <Box className="right-content" id="pizza">
            <Slide direction="left" in={true} timeout={1100}>
              <Box className="text-container" >
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
            </Slide>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PizzaContent;
