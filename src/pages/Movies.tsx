import { useEffect, useState } from "react";
import Card from "../components/Card";
import MovieService from "../services/movieService";
import Movie from "../models/movie";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/Search";
import SearchService from "../services/searchService";
import Loading from "../components/Loading";

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([] as Movie[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
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
                setIsLoading(false);
            }
        });
    };

    const fetchTop10 = async () => {
        MovieService.getTopRatedMovies().then((response) => {
            if (response) {
                setMovies(response.results.slice(0, 10));
                setIsLoading(false);
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
            {
                isLoading ?
                    <Loading />
                    :
                    <div className="card-container">
                        {movies.map((movie) => (
                            <Card key={movie.id} media={movie} />
                        ))}
                    </div>
            }
        </div>
    );
};

export default Movies;
