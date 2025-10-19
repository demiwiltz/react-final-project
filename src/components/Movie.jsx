import React from "react";
import { movies } from "../data";
import { Link } from "react-router-dom";

// make the movie html dynamic and get the api data on here so it can show on the home page
// filtering vid 5:34


// hw: 1. study how you were able to get the search tab to work study the functionality
//  2. study how you were able to fix the filter 
// study those react hooks
// study those dynamic routes again
// KEY GOAL: UNDERSTAND EVERYTHING YOU'RE LEARNING AND DO THAT FROM NOW ON DON'T SKIP ANYHTING BUT BREAK IT DOWN INTO SMALLER PARTS AND UNDERSTAND THOSE PARTS EFFECTIVLEY PIECE BY PIECE



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
