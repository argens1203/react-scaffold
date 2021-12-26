import { getStuff, getAllStuff } from "./stuff.mock.api";

import { Stuff } from "../entities";

describe("mock api", () => {
    it("should return stuff", async () => {
        const stuff = await getStuff("id");

        expect(stuff).toBeDefined();
        expect(stuff?.id).toBe("id");
        expect(stuff).toBeInstanceOf(Stuff);
    });

    it("should return stuff in array", async () => {
        const stuffs = await getAllStuff();

        stuffs.forEach((s) => {
            expect(s).toBeInstanceOf(Stuff);
            expect(s).toBeDefined();
        });
    });
});
