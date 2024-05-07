import { get } from './axios/apiClient';

const ENDPOINT = `/genre`;

const getGenresByType = async (type: string) => {
    const response = await get(`${ENDPOINT}/${type}/list`);
    return response.data;
}

const GenreService = {
    getGenresByType,
}

export default GenreService;
