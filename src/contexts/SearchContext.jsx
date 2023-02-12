import React, { createContext, useState } from "react";
export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState("");
  const [movieList, setMovieList] = useState([]);
  const sharedValues = { searchWord, setSearchWord, movieList, setMovieList };
  return (
    <SearchContext.Provider value={sharedValues}>
      {children}
    </SearchContext.Provider>
  );
};
