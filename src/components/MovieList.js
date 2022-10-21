import React from "react";
import Movie from "./Movie";
import "./MovieList.scss";

function MovieList({ movies }) {
  return (
    <main>
      <ul className="movies">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default MovieList;
