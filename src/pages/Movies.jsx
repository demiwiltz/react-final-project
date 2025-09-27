import React, { useState, useEffect } from 'react';
import Movie from "../components/Movie";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


const Movies = () => {
    function openMenu() {
    document.body.classList += " menu--open";
  }

   function closeMenu() {
    document.body.classList.remove("menu--open");
  } 

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  function filterMovies(filter) {
    console.log(filter);
    // if (filter === "oldest") {
    //   setFilter(movies.slice().sort((a, b) => a.Year - b.Year));
    // }
    // if (filter === "newest") {
    //   setFilter(movies.slice().sort((a, b) => b.Year - a.Year));
    // }
  }

  const getMovies = async () => {
    if (!query) return;
    setLoading(true);

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

  const sortedMovies = [...movies].sort((a, b) => {
    const yearA = parseInt(a.Year) || 0;
    const yearB = parseInt(b.Year) || 0;

    if (sortOrder === "oldest") return yearA - yearB;
    if (sortOrder === "newest") return yearB - yearA;
    return 0;
  });

  // const [searchTerm, setSearchTerm] = useState("fast");

  // async function fetchMovies(query) {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `https://www.omdbapi.com/?apikey=79bfa222&s=${query}`
  //     );
  //     setMovies(response.data.Search || []);
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //     setMovies([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchMovies(searchTerm);
  // }, []);

  // const handleSearch = () => {
  //   fetchMovies(searchTerm);
  // };
  // const response = await axios.get(
  //   "https://www.omdbapi.com/?apikey=79bfa222&s=fast"
  // );
  // const data = response.data.Search;
  // console.log(data);

  return (
    <>
      <nav>
        <div className="overlay">
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
                  <h1>Panda</h1>
                  <h1>Productions</h1>
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
              <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon="fas fa-bars" />
              </button>
              <div className="menu__backdrop">
                <button
                  className="btn__menu btn__menu--close"
                  onClick={closeMenu}
                >
                  <FontAwesomeIcon icon="fas fa-times" />
                </button>
                <ul className="menu__links">
                  <li className="menu__list">
                    <Link to="/" className="menu__link">
                      Home
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link to="/movies" className="menu__link no-cursor">
                      Find your movies
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link to="/contact" className="menu__link no-cursor">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-wrapper">
              <h2>Browse our movies</h2>
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
        </div>
        <div className="progress-bar"></div>
      </nav>

      <main>
        <section id="search">
          <div className="main-wrapper">
            <h3 className="search-info">
              Search Results: {loading ? "Loading..." : query}
            </h3>
            <div className="container">
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => setSortOrder(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort by Year
                </option>
                <option value="oldest">Old to New</option>
                <option value="newest">New to Old</option>
              </select>
              {/* <div className="pages">Pages</div>
              <div className="button__container">
                <i>
                  <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                </i>
                <i>
                  <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                </i>
              </div>
              <div className="page__list">page 1 of 3</div> */}
            </div>
          </div>

          {/* <div className="movies movies__loading">
            <i className="fas fa-spinner movies__loading--spinner"></i>
          </div> */}
          <div className="movies">
            {loading ? (
              <i className="fas fa-spinner movies__loading--spinner"></i>
            ) : sortedMovies.length > 0 ? (
              sortedMovies
                .slice(0, 6)
                .map((movie) => <Movie key={movie.imdbID} movie={movie} />)
            ) : (
              <p>No movies found</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
export default Movies; 