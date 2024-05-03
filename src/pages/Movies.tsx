import { useEffect, useState } from "react";
import Card from "../components/Card";
import MovieService from "../services/movieService";
import Movie from "../models/movie";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/Search";
import SearchService from "../services/searchService";

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([] as Movie[]);

    useEffect(() => {
        if (searchQuery.length >= 3) {
            const timer = setTimeout(() => {
                fetchSearchResults();
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            fetchTop10();
        }
    }, [searchQuery]);

    const fetchSearchResults = async () => {
        SearchService.searchMoviesbyTitle(searchQuery).then((response) => {
            if (response) {
                setMovies(response.results);
            }
        });
    };

    const fetchTop10 = async () => {
        MovieService.getTopRatedMovies().then((response) => {
            if (response) {
                setMovies(response.results.slice(0, 10));
            }
        });
    };

    const handleInputChange = (value: string) => {
        setSearchQuery(value);
    };

    return (
        <div className='container'>
            <Logo />
            <Tabs />
            <Search value={searchQuery} onChange={handleInputChange} />
            <div className="card-container">
                {movies.map((movie) => (
                    <Card key={movie.id} media={movie} />
                ))}
            </div>
        </div>
    );
};

export default Movies;
