import React, { createContext, useState } from "react";
export const SearchContext = createContext();
export const SearchContextProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState("");
  const sharedValues = { searchWord, setSearchWord };
  return (
    <SearchContext.Provider value={sharedValues}>
      {children}
    </SearchContext.Provider>
  );
};
