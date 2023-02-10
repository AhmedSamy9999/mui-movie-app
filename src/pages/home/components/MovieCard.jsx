import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import "./movie-card.css";
import { useNavigate } from "react-router-dom";
import wait from "../../../utils/wait";

const MovieCard = ({ movieObject }) => {
  const { shadows } = useTheme();
  const navigate = useNavigate();
  const { Title, Year, imdbID, Type, Poster } = movieObject;
  async function navigateToMovieDetails() {
    await wait(400);
    navigate(`/movie/${imdbID}`);
  }
  return (
    <CardActionArea className="movie-card" onClick={navigateToMovieDetails}>
      <Card
        sx={{
          width: "100%",
          height: "450px",
          position: "relative",
          borderRadius: "12px",
          ":hover": {
            boxShadow: shadows[24],
          },
        }}
      >
        <CardMedia
          src={Poster}
          component="img"
          alt="moviePoster"
          sx={{ width: "100%", height: "100%" }}
        />
        <CardContent
          sx={{
            width: "100%",
            zIndex: "1",
            position: "absolute",
            maxHeight: "150px",
            minHeight: "150px",
            wordBreak: "break-word",
            bottom: "0",
            bgcolor: "background.cardContent",
          }}
          className="movie-content"
        >
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            {Title}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {Type}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {Year}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default MovieCard;
