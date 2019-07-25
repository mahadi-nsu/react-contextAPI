import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <div>
      {props.movie_list.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}
