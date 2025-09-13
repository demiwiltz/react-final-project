import React from "react";
import { movies } from "../data";
import { Link } from "react-router-dom";

// make the movie html dynamic and get the api data on here so it can show on the home page
// filtering vid 5:34

const Movie = ({ movie }) => {
  return (
    <div className="">
      <div className="movie">
        <Link to="/movies/:id">
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
