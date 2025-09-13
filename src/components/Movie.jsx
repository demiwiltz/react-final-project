import React from "react";
import { movies } from "../data";
import { Link } from "react-router-dom";

// make the movie html dynamic and get the api data on here so it can show on the home page
// dynamic routes vid 5:41

const Movie = ({ movie }) => {
  return (
    <div className="">
      <div className="movie">
        <Link to="/yourmovies/1">
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
        </Link>
        <h4 className="movie__title">{movie.Title}</h4>
      </div>
    </div>
  );
};
export default Movie;
