import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import { movies } from './data'
import Movie from './components/Movie';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home movie={movies} />} />
      <Route path='/movies/:id' render={() => <MovieInfo movie={movies} />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
