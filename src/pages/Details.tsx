import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MovieService from '../services/movieService';
import TvShowService from '../services/tvShowService';
import ImageHelper from '../utils/ImageHelper';
import Media from '../models/media';
import Video from '../models/video';
import Loading from '../components/loading/Loading';
import Trailer from '../components/Trailer';
import LeftArrow from '../assets/icons/LeftArrow';
import Star from '../assets/icons/Star';
import w2wLogo from '../assets/logo/w2w-logo.png';
import Movie from '../models/movie';
import TVShow from '../models/tvShow';

const useMediaDetails = (id: string, isMovies: boolean) => {
    const navigate = useNavigate();

    const [media, setMedia] = useState<Media | null>(null);
    const [video, setVideo] = useState<Video | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = isMovies ? await MovieService.getMovieDetails(+id) : await TvShowService.getTvShowDetails(+id);
                const trailerResponse = isMovies ? await MovieService.getMovieTrailer(+id) : await TvShowService.getTvShowTrailer(+id);

                setMedia(details);
                setVideo(trailerResponse.results.find((video: Video) => video.type === "Trailer"));
            } catch (error) {
                console.error(`Error fetching ${isMovies ? 'movie' : 'TV show'} details:`, error);
                navigate('/404');
            }
        };

        fetchData();
    }, [id, isMovies]);

    return { media, video };
};

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const isMovies = location.pathname.includes('movies');
    const { media, video } = useMediaDetails(id || '', isMovies);

    return (
        <div className="container my-50">
            <div className="back-container">
                <button className="back" onClick={() => navigate(-1)}>
                    <LeftArrow />&nbsp;&nbsp;Back
                </button>
                <img className="back-img" src={w2wLogo} alt="W2W Logo" />
            </div>
            {!media ? <Loading /> : (
                <div className="details">
                    {video ? (
                        <Trailer code={video?.key} />
                    ) : (
                        media?.backdrop_path && <img src={ImageHelper.generateImageLink(ImageHelper.backdropImageSizes.w1280, media.backdrop_path)} alt="Backdrop" loading="eager" />
                    )}
                    <div className="title-wrapper">
                        <h2>{(media as TVShow)?.name || (media as Movie)?.title}</h2>
                        <span className="d-flex align-items-center"><Star />&nbsp;{media?.vote_average?.toFixed(2)} ({media?.vote_count})</span>
                    </div>
                    <div>{media?.genres?.map(genre => genre.name).join(', ')}</div>
                    <div className="d-flex overview-flex">
                        <div className="poster">
                            <img src={ImageHelper.generateImageLink(ImageHelper.posterImageSizes.w500, media?.poster_path || '')} alt="Poster" loading="eager" />
                        </div>
                        <div className="overview">{media?.overview}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
