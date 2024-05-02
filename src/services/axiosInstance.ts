import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
});

axiosInstance.interceptors.request.use((config: any) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTNhYjBiYzAzNzg1MGM5OGIxMmU1MmRhZWYyZTY4ZSIsInN1YiI6IjY2MzIyYTE1MmEwOWJjMDEyYzU4MzZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BDOE0A3HMkScxSNmOTxT25z6d-PojRVjQN8Ps7m6j2g';

    if (token) {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        };
    } else {
        config.headers = {
            ...config.headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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
