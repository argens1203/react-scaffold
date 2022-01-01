import { TransformFnParams } from 'class-transformer';

import { toTwoWayTransformer } from './to-two-way-transformer.hof';

// This is a short hand for transforming function of one-way (json to class) only
export function toTransformer<A, B>(transformFn: (value: A) => B) {
    return toTwoWayTransformer({
        toClass: transformFn,
        transformUndefined: false,
    });
}
