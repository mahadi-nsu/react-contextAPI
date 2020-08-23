import React, { useState, createContext } from "react";
import moviesData from './data';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState(moviesData);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
