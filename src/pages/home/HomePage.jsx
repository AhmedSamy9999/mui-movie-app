import { Box } from "@mui/system";
import React from "react";
import SearchBar from "./components/SearchBar";
import FoundedMovies from "./components/FoundedMovies";

const HomePage = () => {
  return (
    <>
      <Box>
        <SearchBar />
        <FoundedMovies />
      </Box>
    </>
  );
};

export default HomePage;
