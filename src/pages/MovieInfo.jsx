import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// fix the route on this movie info, the html content needs to show when you click find your movies on the nav bar
// in order to fix the above problem I think you have to fix something w/the route in order for it to show
// watch a video on how to fetch the id from the data david shows you and understand what he's doing don't skim thru it understand the code THEN apply it to yours

// !!!!! FIX PROBLEM BELOW !!!!!!

// PROBLEM: trying to get the movie variable to work when I click on a movie from the home page and when i click find your movies from the home page I need to create a loading state w/a message saying no movies found
// still stuck but think the problem is w/my id in the api the imdbID that i'm using is basically console logging the string and NOT the movie information itself w/all the pictures and title etc. so need to find a way to get it to show the actual movie info from the data set

const MovieInfo = ({ movies }) => {
  const { imdbID } = useParams();
  const movie = movies.find((movie) => movie.imdbID === imdbID);
  console.log(imdbID);

  if (!movie) {
    <p>Movie not found!</p>;
  }

// https://www.omdbapi.com/?apikey=79bfa222&i=tt0232500 THIS IS THE ID API URL

  // need to make everything dynamic on this page 
  const [loading, setLoading] = useState(false);
  const [movieOne, setMovieOne] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://omdbapi.com/?i=${imdbID}&apikey=79bfa222`,
        );
        setMovieOne(response);
      } catch (error) {
        console.log("Error fetching movie", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [imdbID]);
  
  return (
    <>
      <section id="movies__body">
        <main id="movies__main">
          <div className="movies__container">
            <div className="row">
              <div className="movie__selected--top">
                <Link to="/" className="movie__link">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <Link to="/">
                  <h2 className="movie__selected--title--top">Movies</h2>
                </Link>
              </div>
              <div className="movie__selected">
                <figure className="movie__selected--figure">
                  <img src="https://m.media-amazon.com/images/M/MV5BZTVkZWY5MmItYjY3OS00OWY3LTg2NWEtOWE1NmQ4NGMwZGNlXkEyXkFqcGc@._V1_SX300.jpg" alt="" className="movie__selected--img"/>
                </figure>
                <div className="movie__selected--description">
                  <h2 className="movie__selected--title">Transformers Rise Of The Beasts</h2>
                  <div className="movie__selected--year">2024</div>
                  <h6 className="movie__rating">PG</h6>
                  <div className="movie__runtime"><h6 className="movie__category">Runtime:</h6> 106 min</div>
                  <h6 className="movie__genre"> <h6 className="movie__category">Genre:</h6> Action, Crime, Thriller</h6>
                  <div className="movie__plot"> <h6 className="movie__plot--title">Plot:</h6>
                    <p className="movie__para">Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to end it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default MovieInfo;
