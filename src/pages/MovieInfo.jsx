import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";


// fix the route on this movie info, the html content needs to show when you click find your movies on the nav bar
// in order to fix the above problem I think you have to fix something w/the route in order for it to show
// watch a video on how to fetch the id from the data david shows you and understand what he's doing don't skim thru it understand the code THEN apply it to yours


// !!!!! FIX PROBLEM BELOW !!!!!!
// The undefined value for your movie variable indicates that the find method is not locating a movie that matches the id from useParams().


// PROBLEM: trying to get the movie variable to work when I click on a movie from the home page and when i click find your movies from the home page I need to create a loading state w/a message saying no movies found


const MovieInfo = ({ movies }) => {

const { id } = useParams()
const movie = movies.find(movie => movie.id === id); 
console.log(id)

if (!movie) {
  <p>Movie not found!</p>
}



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
