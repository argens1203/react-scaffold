import { toTwoWayTransformer } from "./to-two-way-transformer.hof";

import { TransformFnParams } from "class-transformer";

// This is a short hand for transforming function of one-way only
export function toTransformer<A, B>(transformFn: (value: A) => B) {
    return toTwoWayTransformer({
        toClass: transformFn,
        passThroughUndefined: false,
    });
}
