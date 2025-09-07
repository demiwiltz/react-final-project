import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './components/Movie';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path=':id' element={<Movies />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
