import React from "react";
import Movie from "./Movie";
import "./MovieList.scss";

function MovieList({
  movies,
  favoriteHandler,
  favoriteMovieComponent,
  icon,
  buttonText,
}) {
  const FavoriteComponent = favoriteMovieComponent;

  return (
    <main>
      <ul className="movies">
        {movies.map((movie) => {
          return (
            <>
              <div className="movie-container">
                <Movie
                  key={movie.imdbID}
                  poster={movie.Poster}
                  title={movie.Title}
                />
                <FavoriteComponent
                  favoriteHandler={favoriteHandler}
                  movieObject={movie}
                  icon={icon}
                  buttonText={buttonText}
                />
              </div>
            </>
          );
        })}
      </ul>
    </main>
  );
}

export default MovieList;
