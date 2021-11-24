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

