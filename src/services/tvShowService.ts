import { get } from './apiClient';

const ENDPOINT = `/tv`;

const getTopRatedTvShows = async () => {
    const response = await get(`${ENDPOINT}/top_rated`);
    return response.data;
}

const getTvShowDetails = async (id: number) => {
    const response = await get(`${ENDPOINT}/${id}`);
    return response.data;
}

const getTvShowTrailer = async (id: number) => {
    const response = await get(`${ENDPOINT}/${id}/videos`);
    return response.data;
}

const TvShowService = {
    getTopRatedTvShows,
    getTvShowDetails,
    getTvShowTrailer
}

export default TvShowService;
