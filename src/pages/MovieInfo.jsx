import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

// create contact page

const MovieInfo = ({ movies }) => {
  const { imdbID } = useParams();
  const movie = movies.find((movie) => +movie.imdbID === +imdbID);
  console.log(imdbID);



  // https://www.omdbapi.com/?apikey=79bfa222&i=tt0232500 THIS IS THE ID API URL

  const [loading, setLoading] = useState(false);
  const [movieOne, setMovieOne] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://omdbapi.com/?apikey=79bfa222&i=${imdbID}`
        );
        setMovieOne(response.data);
      } catch (error) {
        console.log("Error fetching movie", error);
      } finally {
        setTimeout(() => {
          setLoading(false); // End loading after a delay
        }, 3000); // Adjust the delay time (in milliseconds) as needed
      }
    };
    fetchMovie();
  }, [imdbID]);

  const handleButtonClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };



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
                {loading ? (
                  <Spinner /> // Show spinner while loading
                ) : movieOne ? (
                  <>
                    <figure className="movie__selected--figure">
                      <img
                        src={movieOne.Poster}
                        alt=""
                        className="movie__selected--img"
                      />
                    </figure>
                    <div className="movie__selected--description">
                      <h2 className="movie__selected--title">
                        {movieOne.Title}
                      </h2>
                      <div className="movie__selected--year">
                        {movieOne.Year}
                      </div>
                      <h6 className="movie__rating">{movieOne.Rated}</h6>
                      <div className="movie__runtime">
                        <h6 className="movie__category">Runtime:</h6>
                        {movieOne.Runtime}
                      </div>
                      <div className="movie__genre">
                        {" "}
                        <h6 className="movie__category">Genre:</h6>
                        {movieOne.Genre}
                      </div>
                      <div className="movie__plot">
                        {" "}
                        <h6 className="movie__plot--title">Plot:</h6>
                        <p className="movie__para">{movieOne.Plot}</p>
                      </div>
                      <button
                        className="movie__selected--btn"
                        onClick={handleButtonClick}
                      >
                        Watch Now
                      </button>
                      {isPopupVisible && (
                        <div
                          className={`popup ${isPopupVisible ? "show" : ""}`}
                        >
                          <div className="popup-content">
                          <p>Sorry, page not available.</p>
                          <button className="close" onClick={closePopup}>Close</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <p>No movies found.</p>
                )}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default MovieInfo;
