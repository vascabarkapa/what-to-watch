import { useEffect, useState } from "react";
import Card from "../components/Card";
import TvShowService from "../services/tvShowService";
import TVShow from "../models/tvShow";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/search/Search";
import SearchService from "../services/searchService";
import Loading from "../components/loading/Loading";
import SearchNotFound from "../components/search/SearchNotFound";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root";
import { setText } from "../redux/actions";

const TVShows = () => {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.text);
    const [tvShows, setTvShows] = useState([] as TVShow[]);
    const [top10TvShows, setTop10TvShows] = useState([] as TVShow[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (search.text.length >= 3) {
            const timer = setTimeout(() => {
                fetchSearchResults();
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            if (top10TvShows.length > 0) {
                setTvShows(top10TvShows);
                setIsLoading(false);
            } else {
                fetchTop10();
            }
        }
    }, [search.text]);

    const fetchSearchResults = async () => {
        SearchService.searchTvShowsbyTitle(search.text).then((response) => {
            if (response) {
                setTvShows(response.results);
                setIsLoading(false);
            }
        });
    };

    const fetchTop10 = async () => {
        TvShowService.getTopRatedTvShows().then((response) => {
            if (response) {
                setTvShows(response.results.slice(0, 10));
                setTop10TvShows(response.results.slice(0, 10));
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
                    tvShows.length > 0 ?
                        <div className="card-container">
                            {tvShows.map((tvShow) => (
                                <Card key={tvShow.id} media={tvShow} />
                            ))}
                        </div>
                        :
                        <SearchNotFound media={'TV Shows'} />
            }
        </div>
    );
};

export default TVShows;
