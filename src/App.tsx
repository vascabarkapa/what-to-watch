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
        <Route path="/tv-shows" Component={TVShows} />
        <Route path="/tv-shows/:id" Component={Details} />
        <Route path="/movies" Component={Movies} />
        <Route path="/movies/:id" Component={Details} />
        <Route path="/404" Component={NotFound} />
        <Route path="/" element={<Navigate to="/tv-shows" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
