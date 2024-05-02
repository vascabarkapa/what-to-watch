import { Movie } from "../models/movie";
import { TVShow } from "../models/tvShow";
import ImageHelper from "../utils/ImageHelper";
import Star from "./Star";

interface CardProps {
    media: Movie | TVShow;
}

const Card: React.FC<CardProps> = ({ media }) => {

    return (
        <div className="card">
            <img src={ImageHelper.generateBackdropLink(media?.backdrop_path)} alt="Slika filma" />
            <div className="title-wrapper">
                <h2>{(media as Movie).title || (media as TVShow).name}</h2>
                <span><Star />&nbsp;{media.vote_average.toFixed(2)} ({media.vote_count})</span>
            </div>
            <p className="test">{media.overview}</p>
        </div>
    );
};

export default Card;
