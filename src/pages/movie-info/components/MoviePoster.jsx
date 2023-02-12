import React from "react";
import { Card, CardMedia, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MoviePoster = ({ image }) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        borderRadius: 5,
      }}
    >
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
        }}
        style={{
          boxShadow: "none",
        }}
      >
        <FavoriteBorderIcon />
      </Fab>
      <CardMedia image={image} component="img" />
    </Card>
  );
};

export default MoviePoster;
