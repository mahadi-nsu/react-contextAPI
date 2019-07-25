import React, { useState } from "react";
import Movie from "./Movie";

export default function MovieList() {
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
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}
