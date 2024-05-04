import { useNavigate } from "react-router-dom";
import Movie from "../models/movie";
import TVShow from "../models/tvShow";
import ImageHelper from "../utils/ImageHelper";
import Star from "./Star";
import Media from "../models/media";

import imageNotAvailable from "./../assets/images/image_not_available.png";

interface CardProps {
    media: Movie | TVShow;
}

const Card: React.FC<CardProps> = ({ media }) => {
    const navigate = useNavigate();

    function navigateToDetailsPage(media: Media) {
        const isMovie = (media as Movie).title !== undefined;

        if (isMovie) {
            navigate(`/movies/${media?.id}`);
        } else {
            navigate(`/tv-shows/${media?.id}`);
        }
    }

    return (
        <div className="card" onClick={() => navigateToDetailsPage(media)}>
            <img src={media.backdrop_path ? ImageHelper.generateBackdropLink(media?.backdrop_path) : imageNotAvailable}
                alt={media?.backdrop_path} loading="eager" />
            <div className="title-wrapper">
                <h2>{(media as Movie).title || (media as TVShow).name}</h2>
                <span><Star />&nbsp;{media.vote_average.toFixed(2)} ({media.vote_count})</span>
            </div>
            <p className="test">{media.overview}</p>
        </div>
    );
};

export default Card;
