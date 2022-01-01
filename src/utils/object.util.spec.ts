import { arrayToObj, getTruthfulIndexes, arrayToRecord } from './object.util';
import * as ObjectUtil from './object.util';

describe('getTruthfulIndexes', () => {
    test('properties with true values are returned', () => {
        const obj = {
            true: true,
            somethingTrue: true,
            trueAsWell: true,
        };
        expect(getTruthfulIndexes(obj)).toEqual([
            'true',
            'somethingTrue',
            'trueAsWell',
        ]);
    });

    test('properties with false values are skipped', () => {
        const obj = {
            true: true,
            falsy: false,
            trueAsWell: true,
        };
        expect(getTruthfulIndexes(obj)).toEqual(['true', 'trueAsWell']);
    });
});

describe('arrayToObj', () => {
    it('should transform array of strings into keys of an object', () => {
        const arr = ['key1', 'key2', 'key3'];
        expect(arrayToObj(arr, 'meh')).toEqual({
            key1: 'meh',
            key2: 'meh',
            key3: 'meh',
        });
    });
});

describe('arrayToRecord', () => {
    it('should have initial values of default true', () => {
        const arr = ['key1', 'key2', 'key3'];
        expect(arrayToRecord(arr)).toEqual({
            key1: true,
            key2: true,
            key3: true,
        });
    });
});
