import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

const MovieInfo = ({ movies }) => {
  return (
   <section id="books__body">
  <main id="movies__main">
    <div className="movies__container">
      <div className="row">
        <div className="movie__selected--top">
            <Link to="/" className="movie__link">
            <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
        </div>
      </div>
    </div>
  </main>
   </section>
    
  )
}
export default MovieInfo;