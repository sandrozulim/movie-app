import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Message from "./components/Message";
import { MOVIES_BY_TITLE, API_KEY } from "./constants";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async function (searchValue) {
    const url = `${MOVIES_BY_TITLE}${searchValue}${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      {movies.length === 0 ? (
        <Message message="Start searching for a movie :)" />
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
}

export default App;
