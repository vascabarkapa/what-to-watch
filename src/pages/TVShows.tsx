import { useEffect, useState } from "react";
import Card from "../components/Card";
import TvShowService from "../services/tvShowService";
import { TVShow } from "../models/tvShow";

const TVShows = () => {
    const [tvShows, setTvShows] = useState([] as TVShow[]);

    useEffect(() => {
        TvShowService.getTopRatedTvShows().then((response) => {
            if (response) {
                setTvShows(response.results.slice(0, 10));
            }
        })
    }, []);

    return (
        <div className="card-container">
            {tvShows.map((tvShow) => (
                <Card key={tvShow.id} media={tvShow} />
            ))}
        </div>
    );
};

export default TVShows;
