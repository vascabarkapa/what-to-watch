import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tv-shows" />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/tv-shows/:id" element={<Details />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
