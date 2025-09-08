import React from "react";

// make the movie html dynamic and get the api data on here so it can show on the home page
// featured books vid 4:52

const Movie = () => {
  return (
    <div className="movies">
      <div className="movie">
        <figure>
          <img
            className="movie__img"
            src="https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg"
            alt=""
          />
        </figure>
        <h4 className="movie__title">Transformers</h4>
      </div>
    </div>
  );
};
export default Movie;
