import { Stuff } from '../entities';

import { getAllStuff, getStuff } from './stuff.mock.api';

describe('mock api', () => {
    it('should return stuff', async () => {
        const stuff = await getStuff('id');

        expect(stuff).toBeDefined();
        expect(stuff?.id).toBe('id');
        expect(stuff).toBeInstanceOf(Stuff);
    });

    it('should return stuff in array', async () => {
        const stuffs = await getAllStuff();

        stuffs.forEach((s) => {
            expect(s).toBeInstanceOf(Stuff);
            expect(s).toBeDefined();
        });
    });
});
