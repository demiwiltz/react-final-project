import React from "react";
import { movies } from "../data";

// make the movie html dynamic and get the api data on here so it can show on the home page
// featured books vid 4:52

const Movie = ({ movie }) => {
  return (
    <div className="movies">
      <div className="movie">
        <figure>
          <img
            className="movie__img"
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt=""
          />
        </figure>
        <h4 className="movie__title">{movie.title}</h4>
      </div>
    </div>
  );
};
export default Movie;
