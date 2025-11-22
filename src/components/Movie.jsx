import React from "react";
import { movies } from "../data";
import { Link } from "react-router-dom";


const Movie = ({ movie }) => {
  return (
    <div className="">
      <div className="movie">
        <Link to={`/movies/${movie.imdbID}`}>
          <figure>
            <img
              className="movie__img"
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt=""
            />
          </figure>
            <h4 className="movie__title">{movie.Title}</h4>
            <h5 className="movie__year">{movie.Year}</h5>
        </Link>
      </div>
    </div>
  );
};
export default Movie;
