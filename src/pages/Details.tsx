import { useLocation, useNavigate, useParams } from "react-router-dom";
import w2wLogo from "./../assets/w2w-logo.png";
import LeftArrow from "../components/LeftArrow";
import Star from "../components/Star";
import { useEffect, useState } from "react";
import MovieService from "../services/movieService";
import TvShowService from "../services/tvShowService";
import ImageHelper from "../utils/ImageHelper";
import TVShow from "../models/tvShow";
import Movie from "../models/movie";
import Media from "../models/media";
import Loading from "../components/Loading";

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { pathname } = location;
    const isMovies = pathname.includes('movies');
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState(false);
    const [media, setMedia] = useState({} as Media);

    function navigateBack() {
        navigate("/tv-shows");
    }

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            if (isMovies) {
                MovieService.getMovieDetails(+id).then((response) => {
                    if (response) {
                        setMedia(response as Movie);
                        setIsLoading(false);
                    }
                });
            } else {
                TvShowService.getTvShowDetails(+id).then((response) => {
                    if (response) {
                        setMedia(response as TVShow);
                        setIsLoading(false);
                    }
                });
            }
        }
    }, []);

    return (
        <div className="container my-50">
            <div className="back-container">
                <button className="back" onClick={() => navigateBack()}>
                    <LeftArrow />&nbsp;&nbsp;Back
                </button>
                <img className="back-img" src={w2wLogo} alt="W2W Logo" />
            </div>
            {
                isLoading ?
                    <Loading />
                    :
                    <div className="details">
                        <img src={ImageHelper.generateBackdropLink(media?.backdrop_path)} alt={media?.backdrop_path} loading="eager" />
                        <div className="title-wrapper">
                            <h2>{(media as TVShow).name || (media as Movie).title}</h2>
                            <span className="d-flex align-items-center"><Star />&nbsp;{media?.vote_average} ({media?.vote_count})</span>
                        </div>
                        <div>{media?.genres?.map(genre => genre.name).join(', ')}</div>
                        <div className="d-flex">
                            <div className="poster">
                                <img src={ImageHelper.generateBackdropLink(media?.poster_path)} alt={media?.poster_path} loading="eager" />
                            </div>
                            <div className="overview">{media?.overview}</div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Details;
