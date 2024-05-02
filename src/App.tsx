import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tv-shows">TV Shows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/tv-shows" Component={TVShows} />
          <Route path="/movies" Component={Movies} />
          <Route path="/" element={<Navigate to="/tv-shows" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
