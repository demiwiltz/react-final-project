import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieInfo = ({ movies }) => {

const { id } = useParams()
const movie = movies.find(movie => movie.id === id); 
console.log(movie)



  return (
    <section id="movies__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/" className="movie__link">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </div>
            <div className="movie">
              <h1>{movies.Title}</h1>
              <img src={movies.Poster} alt={movies.Title} />
              <div className="movie__info">
                <div className="movie__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magnam voluptate, sapiente dolore similique harum? Animi tenetur veritatis quis, enim dolore repellat, aliquam provident, hic nisi architecto in? Odio, iure!</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
export default MovieInfo;
