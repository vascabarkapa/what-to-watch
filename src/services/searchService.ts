import { get } from './axios/apiClient';

const ENDPOINT = `/search`;

const searchMoviesbyTitle = async (title: string, page: number = 1) => {
    const response = await get(`${ENDPOINT}/movie`, `query=${title}&page=${page}`);
    return response.data;
}

const searchTvShowsbyTitle = async (title: string, page: number = 1) => {
    const response = await get(`${ENDPOINT}/tv`, `query=${title}&page=${page}`);
    return response.data;
}

const SearchService = {
    searchMoviesbyTitle,
    searchTvShowsbyTitle
}

export default SearchService;
