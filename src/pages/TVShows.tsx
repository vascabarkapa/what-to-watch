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

const TVShows = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tvShows, setTvShows] = useState([] as TVShow[]);
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
        SearchService.searchTvShowsbyTitle(searchQuery).then((response) => {
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
