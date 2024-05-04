import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieService from '../services/movieService';
import TvShowService from '../services/tvShowService';
import Media from '../models/media';
import Video from '../models/video';

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

export default useMediaDetails;