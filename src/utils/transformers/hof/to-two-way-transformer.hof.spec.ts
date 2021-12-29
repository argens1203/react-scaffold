import { Transform, deserialize, serialize, Expose } from 'class-transformer';

import { toTwoWayTransformer } from './to-two-way-transformer.hof';

describe('to two way transformer hof', () => {
    function complexTransformer() {
        return toTwoWayTransformer({
            toClass: (a: number) => (a ? a + 1 : 'undefined'),
            toPlain: (a: number) => (a ? a * 2 : 'undefined'),
            transformUndefined: true,
        });
    }

    class Entity {
        constructor(input: Partial<Entity> = {}) {
            Object.assign(this, input);
        }

        @Expose()
        @Transform(complexTransformer())
        property?: number;
    }
    describe('deserialize - json to class', () => {
        it('can deserialize defined value', () => {
            const json = JSON.stringify({ property: 1 });
            const entity = deserialize(Entity, json);

            expect(entity.property).toBe(2);
        });

        it('can deserialize undefined value', () => {
            const json = JSON.stringify({});
            const entity = deserialize(Entity, json);

            expect(entity.property).toBe('undefined');
        });
    });

    describe('serialize - class to json', () => {
        it('can serialize defined value', () => {
            const entity = new Entity({ property: 1 });
            const json = serialize(entity);
            const obj = JSON.parse(json);

            expect(obj.property).toBe(2);
        });

        it('can serialize undefined property', () => {
            const entity = new Entity({});
            const json = serialize(entity);
            const obj = JSON.parse(json);

            expect(obj.property).toBe('undefined');
        });
    });
});
