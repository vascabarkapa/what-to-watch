import { useNavigate } from "react-router-dom";
import Movie from "../models/movie";
import TVShow from "../models/tvShow";
import ImageHelper from "../utils/ImageHelper";
import Star from "./../assets/icons/Star";
import Media from "../models/media";

import imageNotAvailable from "./../assets/images/image_not_available.png";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/root";

type Props = {
    media: Movie | TVShow;
}

const Card: FC<Props> = ({ media }) => {
    const navigate = useNavigate();
    const genres = useSelector((state: RootState) => state.text);

    const isMovie = (media: Media): media is Movie => 'title' in media;
    const filteredGenres = isMovie(media) ? genres.movieGenres.filter(genre => media?.genre_ids?.includes(genre.id)) : genres.tvShowGenres.filter(genre => media?.genre_ids?.includes(genre.id));

    const navigateToDetailsPage = () => {
        const path = isMovie(media) ? `/movies/${media.id}` : `/tv-shows/${media.id}`;
        navigate(path);
    };

    return (
        <div className="card" onClick={navigateToDetailsPage}>
            <img src={media.backdrop_path ? ImageHelper.generateImageLink(ImageHelper.backdropImageSizes.w500, media.backdrop_path) : imageNotAvailable}
                alt={isMovie(media) ? media.title : media.name || "No image available"} loading="eager" />
            <div className="title-wrapper">
                <h2>{isMovie(media) ? media.title : media.name}</h2>
                <span><Star />&nbsp;{media.vote_average.toFixed(2)} ({media.vote_count.toLocaleString()})</span>
            </div>
            <div className="genres">
                {filteredGenres?.map(genre => genre.name).join(', ')}
            </div>
            <p>{media.overview}</p>
        </div>
    );
};

export default Card;