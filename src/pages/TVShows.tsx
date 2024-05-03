import { useEffect, useState } from "react";
import Card from "../components/Card";
import TvShowService from "../services/tvShowService";
import TVShow from "../models/tvShow";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/Search";
import SearchService from "../services/searchService";

const TVShows = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tvShows, setTvShows] = useState([] as TVShow[]);

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
        SearchService.searchTvShowsbyTitle(searchQuery).then((response) => {
            if (response) {
                setTvShows(response.results);
            }
        });
    };

    const fetchTop10 = async () => {
        TvShowService.getTopRatedTvShows().then((response) => {
            if (response) {
                setTvShows(response.results.slice(0, 10));
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
                {tvShows.map((tvShow) => (
                    <Card key={tvShow.id} media={tvShow} />
                ))}
            </div>
        </div>
    );
};

export default TVShows;
