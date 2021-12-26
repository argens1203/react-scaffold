import { BackendStuff } from "./stuff.backend.entity";

import { deserialize } from "class-transformer";
import { DateTime } from "luxon";

describe("backend stuff", () => {
    it("should parse backend stuff from JSON", () => {
        const json = JSON.stringify({
            meta: {
                updated_at: "2021-10-18T12:43:37.216Z",
                created_at: "2021-10-18T12:43:38.831Z",
                is_enabled: false,
                id: "ID-12345",
            },
            data: "something something",
        });
        const spied = jest.spyOn(DateTime, "fromISO");

        const backendStuff = deserialize(BackendStuff, json);

        expect(backendStuff.meta?.id).toBe("ID-12345");
        expect(spied).toBeCalledWith("2021-10-18T12:43:37.216Z");
        expect(spied).toBeCalledWith("2021-10-18T12:43:38.831Z");
        expect(backendStuff.meta?.createdAt).toBeInstanceOf(DateTime);
        expect(backendStuff.meta?.updatedAt).toBeInstanceOf(DateTime);
        expect(backendStuff.meta?.isEnabled).toBe(false);

        expect(backendStuff.data).toBe("something something");
    });
});
