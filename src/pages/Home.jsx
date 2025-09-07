import React from 'react'

const Home = () => {
  return (
    <nav>
      <div class="overlay">
        <div class="nav__row">
          <div class="nav-bar">
            <div class="nav__logo">
              <img
                data-v-390ceb07=""
                src="https://images.unsplash.com/photo-1649011402576-a7bc591b8f85?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="blinker logo"
                class="logo"
              />
              <div>
                <h1>Panda</h1>
                <h1>Productions</h1>
              </div>
            </div>
            {/* <!-- BTN SHOWS --> */}
            <ul class="nav__links">
              <li class="nav__link">
                <a href="#">Home</a>
              </li>
              <li class="nav__link">
                <a href="#movies">Movies</a>
              </li>
              <li class="nav__link">
                <a href="#tvshows">Tv Shows</a>
              </li>
            </ul>
            <button class="btn__menu" onclick="openMenu()">
              <i class="fas fa-bars"></i>
            </button>
            <div class="menu__backdrop">
              <button class="btn__menu btn__menu--close" onclick="closeMenu()">
                <i class="fas fa-times"></i>
              </button>
              <ul class="menu__links">
                <li class="menu__list">
                  <a href="#" class="menu__link">Home</a>
                </li>
                <li class="menu__list">
                  <a href="#" class="menu__link no-cursor">Movies</a>
                </li>
                <li class="menu__list">
                  <a href="#" class="menu__link no-cursor">Tv Shows</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="content-wrapper">
            <h2>Browse our movies</h2>
            <div class="input-wrap">
              <input
                type="text"
                onchange="searchChange(event)"
                placeholder="Search"
              />
              <div class="search-wrapper">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    //  <div class="progress-bar"></div>
  )
}
export default Home;