import { Box } from "@mui/system";
import React from "react";
import SearchBar from "./components/SearchBar";
import FoundedMovies from "./components/FoundedMovies";
import { SearchContextProvider } from "../../contexts/SearchContext.jsx";

const HomePage = () => {
  return (
    <>
      <Box sx={{ paddingBottom: "20px" }}>
        <SearchContextProvider>
          <SearchBar />
          <FoundedMovies />
        </SearchContextProvider>
      </Box>
    </>
  );
};

export default HomePage;
