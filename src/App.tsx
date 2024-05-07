import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import GenreService from './services/genreService';
import { setMovieGenres, setTVShowGenres } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const [movieResponse, tvShowResponse] = await Promise.all([
          GenreService.getGenresByType('movie'),
          GenreService.getGenresByType('tv')
        ]);

        dispatch(setMovieGenres(movieResponse.genres));
        dispatch(setTVShowGenres(tvShowResponse.genres));
      } catch (error) {
        console.error('Failed to fetch genres:', error);
      }
    };

    fetchGenres();
  }, [dispatch]);


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
