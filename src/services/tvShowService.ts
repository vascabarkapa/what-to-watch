import { get } from './apiClient';

const ENDPOINT = `/tv`;

const getTopRatedTvShows = async () => {
    const response = await get(ENDPOINT + "/top_rated");
    return response.data;
}

const TvShowService = {
    getTopRatedTvShows
}

export default TvShowService;
