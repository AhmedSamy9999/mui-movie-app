import React, { useContext } from "react";
import { Card, CardMedia, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavListContext } from "../../../contexts/FavListContext";

const MoviePoster = ({ isFav, favFunc }) => {
  const { movieObject } = useContext(FavListContext);
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
        onClick={favFunc}
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
        }}
        style={{
          boxShadow: "none",
        }}
      >
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Fab>
      <CardMedia src={movieObject.Poster} component="img" />
    </Card>
  );
};

export default MoviePoster;
