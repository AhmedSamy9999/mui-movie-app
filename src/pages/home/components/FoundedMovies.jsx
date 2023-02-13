import React, { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { SearchContext } from "../../../contexts/SearchContext.jsx";
import MovieCard from "./MovieCard";
import wait from "../../../utils/wait.js";
import Loader from "../../../components/Loader.jsx";
import ErrorMsg from "../../../components/ErrorMsg.jsx";
import useFetch from "../../../Hooks/useFetch.jsx";
const FoundedMovies = () => {
  const { searchWord, movieList, setMovieList } = useContext(SearchContext);

  const api = import.meta.env.VITE_REACT_APP_API_KEY;
  const { isLoading, error, performFetch } = useFetch();

  useEffect(() => {
    if (searchWord) {
      const url = `https://www.omdbapi.com/?apikey=${api}&s=${searchWord}`;
      performFetch(url).then((data) => {
        if (data) setMovieList(data.Search);
      });
    }
  }, [searchWord]);

  useEffect(() => {
    if (error) {
      setMovieList([]);
    }
  }, [error]);

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
