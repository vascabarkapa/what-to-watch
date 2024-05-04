import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root";
import { setText } from "../redux/actions";
import Card from "../components/Card";
import SearchService from "../services/searchService";
import MovieService from "../services/movieService";
import Movie from "../models/movie";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/search/Search";
import Loading from "../components/loading/Loading";
import SearchNotFound from "../components/search/SearchNotFound";

const Movies = () => {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.text);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [top10Movies, setTop10Movies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSearchResults = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await SearchService.searchMoviesbyTitle(search.text);
            setMovies(response.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setIsLoading(false);
        }
    }, [search.text]);

    const fetchTop10 = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await MovieService.getTopRatedMovies();
            const top10 = response.results.slice(0, 10);
            setMovies(top10);
            setTop10Movies(top10);
        } catch (error) {
            console.error('Error fetching top 10 movies:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (search.text.length >= 3) {
            const timer = setTimeout(fetchSearchResults, 1000);
            return () => clearTimeout(timer);
        } else if (top10Movies.length > 0) {
            setMovies(top10Movies);
            setIsLoading(false);
        } else {
            fetchTop10();
        }
    }, [search.text, fetchSearchResults, fetchTop10, top10Movies.length, top10Movies]);

    const handleInputChange = useCallback((value: string) => {
        dispatch(setText(value));
    }, [dispatch]);

    return (
        <div className='container'>
            <Logo />
            <Tabs />
            <Search value={search.text} onChange={handleInputChange} />
            {isLoading ? (
                <Loading />
            ) : (
                movies.length > 0 ? (
                    <div className="card-container">
                        {movies.map(movie => <Card key={movie.id} media={movie} />)}
                    </div>
                ) : (
                    <SearchNotFound media={'Movies'} />
                )
            )}
        </div>
    );
};

export default Movies;
