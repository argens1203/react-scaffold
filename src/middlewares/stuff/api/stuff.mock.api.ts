import {BackendStuff, BackendStuffMeta, Stuff} from "../entities";
import {DateTime} from "luxon";

const getMeta = () => new BackendStuffMeta({
    isEnabled: true,
    updatedAt: DateTime.now(),
    createdAt: DateTime.now(),
});

export async function getStuff(id: string): Promise<Stuff | null> {
    const backendStuff = new BackendStuff({
        meta: getMeta(),
        data: 'data'
    });
    backendStuff.meta!.id = id;
    await new Promise(resolve => setTimeout(resolve, 100));
    return Stuff.fromBackend(backendStuff);
}

export async function getAllStuff(): Promise<Stuff[]> {
    const backendStuff = new BackendStuff({
        meta: getMeta(),
        data: 'data',
    });
    const anotherStuff = new BackendStuff({
        meta: getMeta(),
        data: 'another',
    });
    const nulledStuff = null;
    await new Promise(resolve => setTimeout(resolve, 100));
    const arr: Array<BackendStuff> = [backendStuff, anotherStuff, nulledStuff].filter((s):s is BackendStuff => !!s);
    const res: Array<Stuff> = arr.map(Stuff.fromBackend).filter((s): s is Stuff => !!s);
    return res;
}

