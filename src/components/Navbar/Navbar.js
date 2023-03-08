import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./styles.css";

const Navbar = () => {
  const pages = ["pizza", "pasta", "about", "location"];

  return (
    <AppBar className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="toolbar" disableGutters>
          {pages.map((page) => {
            return (
              <Button className="navbar-button" variant="outlined">
                {page}
              </Button>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
