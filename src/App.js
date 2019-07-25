import React, { useState } from "react";
import "./App.css";

import MovieList from "./components/MovieList";
import Navbar from "./components/NavBar";
import AddMovie from "./components/AddMovie";
import { MovieProvider } from "./components/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
