import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/ahmed.jpg";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "black", height: "70px" }} component="header">
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          sx={{ height: "100%" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link to="/">
              <Typography variant="h4" component="h1" color="#fff">
                Movie App
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Avatar
              src={avatar}
              alt="Avatar"
              sx={{ height: "60px", width: "70px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
