import { Box, TextField } from "@mui/material";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContext } from "../../../contexts/SearchContext";
import lodash from "lodash";

const SearchBar = () => {
  const { setSearchWord } = useContext(SearchContext);
  function handleChange(e) {
    setSearchWord(e.target.value);
  }
  const debounce = lodash.debounce(handleChange, 500);
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon fontSize="large" sx={{ mr: 2 }} color="primary" />
      <TextField
        id="standard-basic"
        label="Search A Movie"
        variant="standard"
        onChange={debounce}
        color="primary"
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
