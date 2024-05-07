import { get } from './axios/apiClient';

const ENDPOINT = `/search`;

const searchMoviesbyTitle = async (title: string) => {
    const response = await get(`${ENDPOINT}/movie`, `query=${title}&page=1`);
    return response.data;
}

const searchTvShowsbyTitle = async (title: string) => {
    const response = await get(`${ENDPOINT}/tv`, `query=${title}&page=1`);
    return response.data;
}

const SearchService = {
    searchMoviesbyTitle,
    searchTvShowsbyTitle
}

export default SearchService;
