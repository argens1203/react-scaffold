import { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';

import { BackendStuff, Stuff } from '../entities';

import { GET_STUFF_URL } from './constants';
import { instance } from './instance';

// Returns mocked at axios instance (./instance) if IS_TEST / IS_MOCK = true.

export async function getAllStuff(): Promise<BackendStuff[]> {
    const nodes = await instance.get(GET_STUFF_URL).then((res) => res.data);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return nodes.map((n: any) => {
        const backendStuff = plainToClass(BackendStuff, n) as BackendStuff;
        return Stuff.fromBackend(backendStuff);
    });
}

export async function getStuff(id: string) {
    const n = await instance
        .get(`${GET_STUFF_URL}/${id}`)
        .then((res: AxiosResponse) => res.data);
    const backendStuff = plainToClass(BackendStuff, n) as BackendStuff;
    return Stuff.fromBackend(backendStuff);
}
