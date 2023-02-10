import { Box, Grid } from "@mui/material";

import React from "react";
import { movieList } from "../../../data/fetchExample";
import MovieCard from "./MovieCard";
const FoundedMovies = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {movieList.Search.map((movie, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <MovieCard movieObject={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoundedMovies;
