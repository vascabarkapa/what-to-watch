import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root";
import { setPage, setText } from "../redux/actions";
import Card from "../components/Card";
import SearchService from "../services/searchService";
import MovieService from "../services/movieService";
import Movie from "../models/movie";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/search/Search";
import Loading from "../components/loading/Loading";
import SearchNotFound from "../components/search/SearchNotFound";
import Pagination from "../components/Pagination";
import MovieResponse from "../models/response/movieResponse";

const Movies = () => {
    const dispatch = useDispatch();
    const redux = useSelector((state: RootState) => state.text);
    const [movies, setMovies] = useState({} as MovieResponse);
    const [top10Movies, setTop10Movies] = useState({} as MovieResponse);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSearchResults = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await SearchService.searchMoviesbyTitle(redux.text, redux.page);
            setMovies(response);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setIsLoading(false);
        }
    }, [redux.text]);

    const fetchTop10 = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await MovieService.getTopRatedMovies();
            const top10 = response.results.slice(0, 10);
            const updatedResponse = { ...response, results: top10 };
            setMovies(updatedResponse);
            setTop10Movies(updatedResponse);
        } catch (error) {
            console.error('Error fetching top 10 movies:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (redux.text.length >= 3) {
            const timer = setTimeout(fetchSearchResults, 1000);
            return () => clearTimeout(timer);
        } else if (top10Movies.results && top10Movies.results.length > 0) {
            setMovies(top10Movies);
            setIsLoading(false);
        } else {
            fetchTop10();
        }
    }, [redux.text, fetchSearchResults, fetchTop10, top10Movies]);

    const handleInputChange = useCallback((value: string) => {
        dispatch(setText(value));
    }, [dispatch]);

    const handlePageClick = async (event: any) => {
        setIsLoading(true);
        try {
            const response = await SearchService.searchMoviesbyTitle(redux.text, event.selected + 1);
            setMovies(response);
            dispatch(setPage(event.selected + 1));
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container'>
            <Logo />
            <Tabs />
            <Search value={redux.text} onChange={handleInputChange} />
            {isLoading ? (
                <Loading />
            ) : (
                (movies.results && movies.results.length > 0) ? (
                    <>
                        <div className="card-container">
                            {movies.results.map((movie: Movie) => <Card key={movie.id} media={movie} />)}
                        </div>
                        {
                            redux.text.length >= 3 && movies.total_pages > 1 &&
                            <Pagination forcePage={redux.page - 1} pageCount={movies.total_pages} handlePageClick={handlePageClick} />
                        }
                    </>
                ) : (
                    <SearchNotFound media={'Movies'} />
                )
            )}
        </div>
    );
};

export default Movies;
