import { get } from './apiClient';

const ENDPOINT = `/movie`;

const getTopRatedMovies = async () => {
    const response = await get(ENDPOINT + "/top_rated");
    return response.data;
}

const MovieService = {
    getTopRatedMovies
}

export default MovieService;
