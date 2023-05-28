import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { BASE_URL, IS_TEST } from '../../../../config';
import { GET_STUFF_URL } from '../constants';

import { onError, onRequest, onResponse } from './interceptors';
import { getAllBackendStuff, getBackendStuff } from './mock';

const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse, onError);
export { instance };
