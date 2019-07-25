import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.price);
  };
  const newMovie = e => {
    e.preventDefault();
    const newOne = {
      name: name,
      price: price
    };
    // setMovies(prevMovies => prevMovies.concat(newOne));
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form onSubmit={newMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
        placeholder="Add Name"
      />

      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
        placeholder="Add Price"
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
