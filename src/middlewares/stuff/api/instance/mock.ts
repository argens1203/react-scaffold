import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { classToPlain } from 'class-transformer';
import { DateTime } from 'luxon';

import { BASE_URL } from '../../../../config';
import { BackendStuff, BackendStuffMeta } from '../../entities';
import { GET_STUFF_URL } from '../constants';

const mockInstance = axios.create({ baseURL: BASE_URL });

// eslint-disable-next-line no-promise-executor-return
const timeout = new Promise((resolve) => setTimeout(resolve, 100));

const getMeta = (id?: string) =>
    new BackendStuffMeta({
        id,
        isEnabled: true,
        updatedAt: DateTime.now(),
        createdAt: DateTime.now(),
    });

export const getAllBackendStuff = () => {
    const backendStuff = new BackendStuff({
        meta: getMeta('1'),
        data: 'data',
    });
    const anotherStuff = new BackendStuff({
        meta: getMeta('2'),
        data: 'another',
    });
    return classToPlain([backendStuff, anotherStuff]);
};

export function getBackendStuff(id: string) {
    const backendStuff = new BackendStuff({
        meta: getMeta(id),
        data: 'data',
    });
    return classToPlain(backendStuff);
}

const mock = new MockAdapter(mockInstance);

mock.onGet(GET_STUFF_URL).reply(200, getAllBackendStuff());

mock.onGet(new RegExp(`${GET_STUFF_URL}/*`)).reply((config) => {
    const match = config.url?.replace(`${GET_STUFF_URL}/`, '') || '';
    return [200, getBackendStuff(match)];
});

export { mockInstance };
