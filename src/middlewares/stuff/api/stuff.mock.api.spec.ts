import { Stuff } from "../entities";
import {getStuff} from "./stuff.mock.api";

describe('mock api', ()=>{
    it('should return stuff', async ()=>{
        const stuff = await getStuff('id');

        expect(stuff).toBeDefined();
        expect(stuff?.id).toBe('id');
        expect(stuff).toBeInstanceOf(Stuff);
    });
});