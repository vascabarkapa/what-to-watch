import { useLocation, useNavigate, useParams } from "react-router-dom";
import w2wLogo from "./../assets/logo/w2w-logo.png";
import LeftArrow from "../assets/icons/LeftArrow";
import Star from "../assets/icons/Star";
import { useEffect, useState } from "react";
import MovieService from "../services/movieService";
import TvShowService from "../services/tvShowService";
import ImageHelper from "../utils/ImageHelper";
import TVShow from "../models/tvShow";
import Movie from "../models/movie";
import Media from "../models/media";
import Loading from "../components/loading/Loading";
import Trailer from "../components/Trailer";
import Video from "../models/video";
import { useSelector } from "react-redux";
import { RootState } from "../redux/root";

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const tab = useSelector((state: RootState) => state.text);

    const { pathname } = location;
    const isMovies = pathname.includes('movies');
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState(false);
    const [media, setMedia] = useState({} as Media);
    const [video, setVideo] = useState({} as Video);

    function navigateBack() {
        navigate(tab.type);
    }

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            if (!id) {
                setIsLoading(false);
                return;
            }

            if (isMovies) {
                try {
                    const movieDetails = await MovieService.getMovieDetails(+id);
                    if (movieDetails) {
                        setMedia(movieDetails);
                        const movieTrailerResponse = await MovieService.getMovieTrailer(+id);
                        if (movieTrailerResponse) {
                            setVideo(movieTrailerResponse.results.find((video: Video) => video.type === "Trailer"));
                        }
                    }
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                    navigate('/404');
                } finally {
                    setIsLoading(false);
                }
            } else {
                try {
                    const tvShowDetails = await TvShowService.getTvShowDetails(+id);
                    if (tvShowDetails) {
                        setMedia(tvShowDetails);
                        const tvShowTrailerResponse = await TvShowService.getTvShowTrailer(+id);
                        if (tvShowTrailerResponse) {
                            setVideo(tvShowTrailerResponse.results.find((video: Video) => video.type === "Trailer"));
                        }
                    }
                } catch (error) {
                    console.error('Error fetching TV show details:', error);
                    navigate('/404');
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchData();
    }, [id, isMovies]);

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
                        {
                            video ?
                                <Trailer code={video?.key} />
                                :
                                media?.backdrop_path &&
                                <img src={ImageHelper.generateImageLink(media?.backdrop_path)} alt={media?.backdrop_path} loading="eager" />
                        }
                        <div className="title-wrapper">
                            <h2>{(media as TVShow).name || (media as Movie).title}</h2>
                            <span className="d-flex align-items-center"><Star />&nbsp;{media?.vote_average && media.vote_average.toFixed(2)} ({media?.vote_count})</span>
                        </div>
                        <div>{media?.genres?.map(genre => genre.name).join(', ')}</div>
                        <div className="d-flex overview-flex">
                            <div className="poster">
                                <img src={ImageHelper.generateImageLink(media?.poster_path)} alt={media?.poster_path} loading="eager" />
                            </div>
                            <div className="overview">{media?.overview}</div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Details;
