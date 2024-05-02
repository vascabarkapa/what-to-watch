import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import Tabs from './components/Tabs';
import Search from './components/Search';
import Logo from './components/Logo';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Logo />
        <Tabs />
        <Search />
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
