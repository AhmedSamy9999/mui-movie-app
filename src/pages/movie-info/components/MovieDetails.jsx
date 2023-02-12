import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import OneDetail from "./OneDetail";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MovieDetails = ({ details }) => {
  const { Title, Year, imdbRating, Country, Genre, Language, Plot, Runtime } =
    details;
  return (
    <Box>
      <Typography variant="h4" component="h3" color="primary">
        {Title}
      </Typography>
      <Typography variant="h5" component="p" color="primary">
        ({Year})
      </Typography>

      <OneDetail
        title="Movie Produced in"
        content={`${Country} - (${Language})`}
      />
      <OneDetail title="Categories" content={Genre} />
      <OneDetail title="Movie is about" content={Plot} />
      <OneDetail title="Movie time" content={Runtime} />
      <OneDetail
        title="Rating"
        content={
          <>
            <Grid container alignItems="center" spacing={1.5}>
              <Grid item>
                <Typography component="span" variant="h6">
                  {imdbRating}
                </Typography>
              </Grid>
              <Grid item>
                <Rating
                  name="customized-10"
                  defaultValue={Number(imdbRating)}
                  max={10}
                  readOnly
                  precision={0.1}
                />
              </Grid>
            </Grid>
          </>
        }
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        endIcon={<FavoriteBorderIcon />}
        style={{
          boxShadow: "none",
          padding: "10px",
          borderRadius: "12px",
        }}
      >
        Add to favourite
      </Button>
    </Box>
  );
};

export default MovieDetails;
