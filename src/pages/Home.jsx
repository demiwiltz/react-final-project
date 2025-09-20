import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { render } from "@testing-library/react";
import { movies } from "../data";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

const Home = ({}) => {
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
              <h1>Panda</h1>
              <h1>Productions</h1>
            </div>
          </div>
          {/* <!-- BTN SHOWS --> */}
          <ul className="nav__links">
            <li className="nav__link">
              <a href="#">Home</a>
            </li>
            <li className="nav__link">
              <a href="#yourmovie">Your Movie</a>
            </li>
            <li className="nav__link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>;
};
export default Home;
