import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon fontSize="large" sx={{ mr: 2 }} />
      <TextField
        id="standard-basic"
        label="standard"
        variant="standard"
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
