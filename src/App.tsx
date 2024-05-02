import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import Tabs from './components/Tabs';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Tabs />
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
