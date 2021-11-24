import axios, { AxiosResponse } from "axios";
import {BASE_URL} from "../../../config";
import {BackendStuff, Stuff} from "../entities";
import {deserialize} from "class-transformer";

export async function getAllNodes(): Promise<BackendStuff[]> {
    const nodes = await axios.get(`${BASE_URL}/nodes`).then(res => res.data.data);
    return nodes.map((n: any) => deserialize(BackendStuff, JSON.stringify(n)));
}

export async function getNode(id: string) {
    const n = await axios.get(`${BASE_URL}/stuffs/${id}`).then((res: AxiosResponse) => res.data.data);
    const backendStuff = deserialize(BackendStuff, JSON.stringify(n));
    return Stuff.fromBackend(backendStuff)
}