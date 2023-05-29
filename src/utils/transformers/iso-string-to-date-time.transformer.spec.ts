import { Transform, deserialize, Expose } from 'class-transformer';
import { DateTime } from 'luxon';

import { isoStringToDateTime } from './iso-string-to-date-time.transformer';

describe('to two way transformer hof', () => {
    describe('deserialize - json to class', () => {
        class Entity {
            constructor(input: Partial<Entity> = {}) {
                Object.assign(this, input);
            }

            @Expose()
            @Transform(isoStringToDateTime())
            property?: DateTime;
        }

        it('can deserialize defined value', () => {
            const json = JSON.stringify({
                property: '2022-01-01T15:17:26.857Z',
            });
            const entity = deserialize(Entity, json);
            const datetime = entity.property;

            entity.property = datetime?.setZone?.('Asia/Hong_Kong');

            expect(entity.property?.year).toBe(2022);
            expect(entity.property?.month).toBe(1);
            expect(entity.property?.day).toBe(1);

            expect(entity.property?.hour).toBe(23);
            expect(entity.property?.minute).toBe(17);
            expect(entity.property?.second).toBe(26);
            expect(entity.property?.millisecond).toBe(857);
            expect(entity.property?.zoneName).toBe('Asia/Hong_Kong');
        });

        it('can deserialize undefined value', () => {
            const json = JSON.stringify({});
            const entity = deserialize(Entity, json);

            expect(entity.property).toBeUndefined();
        });
    });
});
