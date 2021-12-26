import { BackendStuff } from "./stuff.backend.entity";

export class Stuff {
    constructor(input: Partial<Stuff> = {}) {
        Object.assign(this, input);
    }

    id!: string;

    data!: string;

    tag?: string;

    static fromBackend(n: BackendStuff) {
        const { meta = {}, data, ...rest } = n;
        const { id, isEnabled } = meta;
        if (!id || !isEnabled || !data) {
            return null;
        }
        return new Stuff({ id, data, ...rest });
    }
}
