import React, { useContext, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { SearchContext } from "../../../contexts/SearchContext.jsx";
import MovieCard from "./MovieCard";
import wait from "../../../utils/wait.js";
import Loader from "../../../components/Loader.jsx";
import ErrorMsg from "../../../components/ErrorMsg.jsx";
const FoundedMovies = () => {
  const { searchWord } = useContext(SearchContext);
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const api = import.meta.env.VITE_REACT_APP_API_KEY;

  async function getMovies() {
    try {
      setIsLoading(true);
      setError(null);
      await wait(1500);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${api}&s=${searchWord}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovieList(data.Search);
      } else {
        setMovieList([]);
        setError(data.Error);
      }
    } catch (error) {
      console.log("Movie not found!", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (searchWord) {
      getMovies();
    }
  }, [searchWord]);

  return (
    <Box mt={3}>
      {error && <ErrorMsg error={error} />}
      {isLoading && <Loader />}
      <Grid container spacing={2}>
        {movieList.map((movie, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <MovieCard movieObject={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoundedMovies;
