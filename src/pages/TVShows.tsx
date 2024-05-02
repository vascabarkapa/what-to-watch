import { useEffect } from "react";
import Card from "../components/Card";
import TvShowService from "../services/tvShowService";

const TVShows = () => {
    useEffect(() => {
        TvShowService.getTopRatedTvShows().then((response) => {
            if(response) {
                console.log(response);
            }
        })
    }, []);
    return (
        <div className="card-container">
Nema
        </div>
    );
};

export default TVShows;
