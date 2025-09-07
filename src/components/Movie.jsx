import React from 'react'

// make the movie html dynamic and get the api data on here so it can show on the home page


const Movie = () => {
  return (
    <div className='movies'>
        <div className="movie">
            <figure>
                <img className='movie__img' src="https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg" alt="" />
            </figure>
            <h4 className='movie__title'>Transformers</h4>
        </div>
        <div className="movie">
            <figure>
                <img className='movie__img' src="https://m.media-amazon.com/images/M/MV5BMTg0MjAwNDI5MV5BMl5BanBnXkFtZTcwODkyMzg2Mg@@._V1_SX300.jpg" alt="" />
            </figure>
            <h4 className='movie__title'>Cloudy with a chance of Meatballs</h4>
        </div>
        <div className="movie">
            <figure>
                <img className='movie__img' src="https://m.media-amazon.com/images/M/MV5BYTAxNTY2NjMtYjk5Yy00Nzg4LTkyMmItYmMzMDM2OWQ1ZGQ3XkEyXkFqcGc@._V1_SX300.jpg" alt="" />
            </figure>
            <h4 className='movie__title'>Taken</h4>
        </div>
        <div className="movie">
            <figure>
                <img className='movie__img' src="https://m.media-amazon.com/images/M/MV5BOTM5OTQ2ZTYtY2EzMC00Zjc3LTg3NWEtZWI4OTdlMjcwMGFlXkEyXkFqcGc@._V1_SX300.jpg" alt="" />
            </figure>
            <h4 className='movie__title'>Heart of Stone</h4>
        </div>
        <div className="movie">
            <figure>
                <img className='movie__img' src="https://m.media-amazon.com/images/M/MV5BMTU2MDY3MzAzMl5BMl5BanBnXkFtZTcwMTg0NjM5NA@@._V1_SX300.jpg" alt="" />
            </figure>
            <h4 className='movie__title'>Rio</h4>
        </div>
        <div className="movie">
            <figure>
                <img className='movie__img' src="https://m.media-amazon.com/images/M/MV5BMTQ0ODg3ODEyMF5BMl5BanBnXkFtZTcwNjI1MTgxMw@@._V1_SX300.jpg" alt="" />
            </figure>
            <h4 className='movie__title'>The Karate Kid</h4>
        </div>
    </div>
  )
}
export default Movie;