import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import { movies } from './data'
import Movie from './components/Movie';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies movie={movies} />} />
      <Route path='/movies/:id' element={() => <MovieInfo movie={movies} />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
