import { Transform, deserialize, serialize } from 'class-transformer';
import { toTransformer } from './to-transformer.hof';

function addOne() {
  return toTransformer((a: number) => a + 1);
}

class Entity {
  constructor(input: Partial<Entity> = {}) {
    Object.assign(this, input);
  }

    @Transform(addOne())
    property?: number;
}

describe('to transformer hof', () => {
  describe('deserialize - json to class', () => {
    it('can deserialize defined value', () => {
      const json = JSON.stringify({ property: 1 });
      const entity = deserialize(Entity, json);

      expect(entity.property).toBe(2);
    });

    it('can deserialize undefined value', () => {
      const json = JSON.stringify({});
      const entity = deserialize(Entity, json);

      expect(entity.property).toBe(undefined);
    });
  });

  describe('serialize - class to json', () => {
    it('should not affect serialized property', () => {
      const entity = new Entity({ property: 1 });
      const json = serialize(entity);
      const obj = JSON.parse(json);

      expect(obj.property).toBe(1);
    });

    it('should serialize undefined property', () => {
      const entity = new Entity({});
      const json = serialize(entity);
      const obj = JSON.parse(json);

      expect(obj.property).toBeUndefined();
    });
  });
});
