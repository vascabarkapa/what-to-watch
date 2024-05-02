import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

const { get: axiosGet, post: axiosPost, put: axiosPut, delete: axiosDelete } = axiosInstance;

const get = (endpoint: string, query: string = ''): Promise<AxiosResponse> =>
    axiosGet(`${endpoint}${query ? `?${query}` : ''}`);

const post = (endpoint: string, body: any, query: string = '', config = {}): Promise<AxiosResponse> =>
    axiosPost(`${endpoint}${query ? `?${query}` : ''}`, body, config);

const put = (endpoint: string, body: any, query: string = ''): Promise<AxiosResponse> =>
    axiosPut(`${endpoint}${query ? `?${query}` : ''}`, body);

const remove = (endpoint: string, query: string = ''): Promise<AxiosResponse> =>
    axiosDelete(`${endpoint}${query ? `?${query}` : ''}`);

const exportFile = (endpoint: string): Promise<AxiosResponse> =>
    axiosGet(`${endpoint}`, { responseType: 'blob' });

export { get, post, put, remove, exportFile };
