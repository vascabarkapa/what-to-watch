import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root";
import { setText } from "../redux/actions";
import Card from "../components/Card";
import SearchService from "../services/searchService";
import TvShowService from "../services/tvShowService";
import TVShow from "../models/tvShow";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/search/Search";
import Loading from "../components/loading/Loading";
import SearchNotFound from "../components/search/SearchNotFound";

const TVShows = () => {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.text);
    const [tvShows, setTvShows] = useState<TVShow[]>([]);
    const [top10TvShows, setTop10TvShows] = useState<TVShow[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSearchResults = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await SearchService.searchTvShowsbyTitle(search.text);
            setTvShows(response.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setIsLoading(false);
        }
    }, [search.text]);

    const fetchTop10 = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await TvShowService.getTopRatedTvShows();
            const top10 = response.results.slice(0, 10);
            setTvShows(top10);
            setTop10TvShows(top10);
        } catch (error) {
            console.error('Error fetching top 10 tv shows:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (search.text.length >= 3) {
            const timer = setTimeout(fetchSearchResults, 1000);
            return () => clearTimeout(timer);
        } else if (top10TvShows.length > 0) {
            setTop10TvShows(top10TvShows);
            setIsLoading(false);
        } else {
            fetchTop10();
        }
    }, [search.text, fetchSearchResults, fetchTop10, top10TvShows.length]);

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
                tvShows.length > 0 ? (
                    <div className="card-container">
                        {tvShows.map(tvShow => <Card key={tvShow.id} media={tvShow} />)}
                    </div>
                ) : (
                    <SearchNotFound media={'TV Shows'} />
                )
            )}
        </div>
    );
};

export default TVShows;
