import { createContext, useState } from "react";

export const FavListContext = createContext();
export const FavListContextProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);
  const [movieObject, setMovieObject] = useState(null);

  const sharedValues = {
    favList,
    setFavList,
    movieObject,
    setMovieObject,
  };
  return (
    <FavListContext.Provider value={sharedValues}>
      {children}
    </FavListContext.Provider>
  );
};
