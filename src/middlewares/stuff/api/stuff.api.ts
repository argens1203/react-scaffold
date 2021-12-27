import axios, { AxiosResponse } from 'axios';
import { deserialize } from 'class-transformer';

import { BASE_URL } from '../../../config';
import { BackendStuff, Stuff } from '../entities';

export async function getAllNodes(): Promise<BackendStuff[]> {
    const nodes = await axios
        .get(`${BASE_URL}/nodes`)
        .then((res) => res.data.data);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return nodes.map((n: any) => deserialize(BackendStuff, JSON.stringify(n)));
}

export async function getNode(id: string) {
    const n = await axios
        .get(`${BASE_URL}/stuffs/${id}`)
        .then((res: AxiosResponse) => res.data.data);
    const backendStuff = deserialize(BackendStuff, JSON.stringify(n));
    return Stuff.fromBackend(backendStuff);
}
