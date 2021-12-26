import { BackendStuff, BackendStuffMeta } from "./stuff.backend.entity";
import { Stuff } from "./stuff.entity";

describe("entity", () => {
    it("should cosntruct entity from valid backend object", () => {
        const meta = new BackendStuffMeta({ id: "1", isEnabled: true });
        const backendStuff = new BackendStuff({ meta, data: "something" });
        const stuff = Stuff.fromBackend(backendStuff);

        expect(stuff?.data).toBe("something");
        expect(stuff?.id).toBe("1");
    });
    describe("invalid backend objects", () => {
        it("should return null from missing id", () => {
            const meta = new BackendStuffMeta({ isEnabled: false });
            const backendStuff = new BackendStuff({ meta, data: "something" });
            const stuff = Stuff.fromBackend(backendStuff);

            expect(stuff).toBeNull();
        });
        it("should return null from disabled objects", () => {
            const meta = new BackendStuffMeta({ id: "1", isEnabled: false });
            const backendStuff = new BackendStuff({ meta, data: "something" });
            const stuff = Stuff.fromBackend(backendStuff);

            expect(stuff).toBeNull();
        });
        it("should return null from missing data", () => {
            const meta = new BackendStuffMeta({ id: "1", isEnabled: true });
            const backendStuff = new BackendStuff({ meta });
            const stuff = Stuff.fromBackend(backendStuff);

            expect(stuff).toBeNull();
        });
    });
});
