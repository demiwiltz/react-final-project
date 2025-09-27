import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { render } from "@testing-library/react";
import { movies } from "../data";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";
import MovieImg from "../assets/awol-vision-projector-Uff2iGkpNs4-unsplash.jpg";

// 1. get the search tab to work fetching the movies data by making it go to the movies page when you search for a movie


const Home = ({}) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    if (!query) return;
    console.log(query)
    // setLoading(true);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=79bfa222&s=${query}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav>
        <div className="nav__row">
          <div className="nav-bar">
            <div className="nav__logo">
              <img
                data-v-390ceb07=""
                src="https://images.unsplash.com/photo-1649011402576-a7bc591b8f85?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="blinker logo"
                className="logo"
              />
              <div>
                <h4>Panda</h4>
                <h4>Productions</h4>
              </div>
            </div>
            {/* <!-- BTN SHOWS --> */}
            <ul className="nav__links">
              <li className="nav__link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__link">
                <Link to="/movies">Find your movies</Link>
              </li>
              <li className="nav__link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <div className="header__row">
          <figure className="header__img--container">
            <img src={MovieImg} className="header__img" alt="" />
          </figure>
          <div className="header__content">
              <h1 className="header__title">
                Stream all of your favorite movies
              </h1>
              <h1 className="header__title title--one">in one platform</h1>
            <div className="input-wrap">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getMovies();
                  }
                }}
                placeholder="Search"
              />
              <div className="search-wrapper" onClick={() => getMovies()}>
                {/* handleSearch onClick ^^^^^^^^*/}
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Home;
