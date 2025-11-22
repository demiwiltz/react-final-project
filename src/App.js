import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import { movies } from './data'
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/:imdbID' element={<MovieInfo movies={movies} />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
