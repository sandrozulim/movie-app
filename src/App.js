import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import FavoriteMovieComponent from "./components/FavoriteMovieComponent";
import { MOVIES_BY_TITLE, API_KEY } from "./constants";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  console.log(favoritesList);

  async function getMovieRequest(searchValue) {
    const url = `${MOVIES_BY_TITLE}${searchValue}${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  function addFavoriteMovie(movieObject) {
    const results = [...favoritesList, movieObject];
    setFavoritesList(results);
  }

  function removeFavoriteMovie(movieObject) {
    const results = favoritesList.filter((movie) => {
      return movie.imdbID !== movieObject.imdbID;
    });
    setFavoritesList(results);
  }

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={movies}
              favoriteHandler={addFavoriteMovie}
              icon={faHeart}
              buttonText="Add to favorites"
              favoriteMovieComponent={FavoriteMovieComponent}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <MovieList
              movies={favoritesList}
              favoriteHandler={removeFavoriteMovie}
              icon={faXmark}
              buttonText="Remove from favorites"
              favoriteMovieComponent={FavoriteMovieComponent}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
