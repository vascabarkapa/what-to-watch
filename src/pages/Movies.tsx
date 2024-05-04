import { useEffect, useState } from "react";
import Card from "../components/Card";
import MovieService from "../services/movieService";
import Movie from "../models/movie";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/search/Search";
import SearchService from "../services/searchService";
import Loading from "../components/loading/Loading";
import SearchNotFound from "../components/search/SearchNotFound";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root";
import { setText } from "../redux/actions";

const Movies = () => {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.text);
    const [movies, setMovies] = useState([] as Movie[]);
    const [top10Movies, setTop10Movies] = useState([] as Movie[]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        if (search.text.length >= 3) {
            const timer = setTimeout(() => {
                fetchSearchResults();
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            if (top10Movies.length > 0) {
                setMovies(top10Movies);
                setIsLoading(false);
            } else {
                fetchTop10();
            }
        }
    }, [search.text]);

    const fetchSearchResults = async () => {
        SearchService.searchMoviesbyTitle(search.text).then((response) => {
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
                setTop10Movies(response.results.slice(0, 10));
                setIsLoading(false);
            }
        });
    };

    const handleInputChange = (value: string) => {
        dispatch(setText(value));
    };

    return (
        <div className='container'>
            <Logo />
            <Tabs />
            <Search value={search.text} onChange={handleInputChange} />
            {
                isLoading ?
                    <Loading />
                    :
                    movies.length > 0 ?
                        <div className="card-container">
                            {movies.map((movie) => (
                                <Card key={movie.id} media={movie} />
                            ))}
                        </div>
                        :
                        <SearchNotFound media={'Movies'} />
            }
        </div>
    );
};

export default Movies;
