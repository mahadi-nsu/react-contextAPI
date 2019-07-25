import React, { useState } from "react";
import "./App.css";

import MovieList from "./components/MovieList";
import Navbar from "./components/NavBar";
import { MovieProvider } from "./components/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
