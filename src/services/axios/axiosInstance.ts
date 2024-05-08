import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
});

axiosInstance.interceptors.request.use((config: any) => {
    const token = process.env.REACT_APP_TMDB_KEY;

    if (token) {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        };
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
