import { get } from './axios/apiClient';

const ENDPOINT = `/movie`;

const getTopRatedMovies = async () => {
    const response = await get(`${ENDPOINT}/top_rated`);
    return response.data;
}

const getMovieDetails = async (id: number) => {
    const response = await get(`${ENDPOINT}/${id}`);
    return response.data;
}

const getMovieTrailer = async (id: number) => {
    const response = await get(`${ENDPOINT}/${id}/videos`);
    return response.data;
}

const MovieService = {
    getTopRatedMovies,
    getMovieDetails,
    getMovieTrailer
}

export default MovieService;
