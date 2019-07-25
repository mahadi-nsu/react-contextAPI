import React, { useState } from "react";
import "./App.css";

import MovieList from "./components/MovieList";
import Navbar from "./components/NavBar";

function App() {
  const [movies, setMovies] = useState([
    {
      name: "Harry potter",
      price: "$10",
      id: 1
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2
    },
    {
      name: "Forest gump",
      price: "$10",
      id: 3
    }
  ]);
  return (
    <div className="App">
      <MovieList movie_list={movies} />
    </div>
  );
}

export default App;
