import {
    AxiosError,
    AxiosRequestTransformer,
    AxiosResponseTransformer,
} from 'axios';

export const onRequest: AxiosRequestTransformer = (config) => config;
export const onResponse: AxiosResponseTransformer = (resp) => resp;
export const onError = (err: AxiosError) => Promise.reject(err);
