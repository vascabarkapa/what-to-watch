import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/root';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ImageHelper from '../utils/ImageHelper';
import Loading from '../components/loading/Loading';
import Trailer from '../components/Trailer';
import LeftArrow from '../assets/icons/LeftArrow';
import Star from '../assets/icons/Star';
import w2wLogo from '../assets/logo/w2w-logo.png';
import Movie from '../models/movie';
import TVShow from '../models/tvShow';
import useMediaDetails from '../hooks/mediaDetails';

const Details: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const isMovies = location.pathname.includes('movies');
    const { media, video } = useMediaDetails(id || '', isMovies);
    const tab = useSelector((state: RootState) => state.text);

    const navigateBack = () => {
        navigate(tab.type || '/');
    }

    return (
        <div className="container my-50">
            <div className="back-container">
                <button className="back" onClick={navigateBack}>
                    <LeftArrow />&nbsp;&nbsp;Back
                </button>
                <img className="back-img" src={w2wLogo} alt="W2W Logo" />
            </div>
            {!media ? <Loading /> : (
                <div className="details">
                    {video ? (
                        <Trailer code={video?.key} />
                    ) : (
                        media?.backdrop_path && <img src={ImageHelper.generateImageLink(ImageHelper.backdropImageSizes.w1280, media.backdrop_path)} alt="Cover image" loading="eager" />
                    )}
                    <div className="title-wrapper">
                        <h2>{(media as TVShow)?.name || (media as Movie)?.title}</h2>
                        <span className="d-flex align-items-center"><Star />&nbsp;{media?.vote_average?.toFixed(2)} ({media?.vote_count})</span>
                    </div>
                    <div>{media?.genres?.map(genre => genre.name).join(', ')}</div>
                    <div className="d-flex overview-flex">
                        {media?.poster_path && (
                            <>
                                <div className="poster">
                                    <img src={ImageHelper.generateImageLink(ImageHelper.posterImageSizes.w500, media?.poster_path || '')} alt="Poster image" loading="eager" />
                                </div>
                            </>
                        )}
                        <div className="overview">
                            {media?.tagline && <div className="tagline">{media?.tagline}</div>}
                            {media?.overview}
                            <div className="info">
                                {media?.adult && (
                                    <>
                                        <span>Adult:</span> +18
                                    </>
                                )}
                            </div>
                            <div className="info">
                                {media?.status && (
                                    <>
                                        <span>Status:</span> {media?.status}
                                    </>
                                )}
                            </div>
                            <div className="info">
                                {media?.production_companies && media?.production_companies.length > 0 && (
                                    <>
                                        <span>Production Companies:</span> {media?.production_companies?.map(production_company => production_company.name + " (" + production_company.origin_country + ")").join(', ')}
                                    </>
                                )}
                            </div>
                            <div className="info">
                                {media?.spoken_languages && media?.spoken_languages.length > 0 && (
                                    <>
                                        <span>Spoken Languages:</span> {media?.spoken_languages?.map(spoken_language => (spoken_language.english_name + " (" + spoken_language.name + ")")).join(', ')}
                                    </>
                                )}
                            </div>
                            <div className="more-information">
                                {media?.homepage && (
                                    <>
                                        Click <a href={media?.homepage}>here</a> for more details
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
