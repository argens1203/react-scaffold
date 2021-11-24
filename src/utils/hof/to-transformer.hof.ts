import { TransformFnParams } from 'class-transformer';

export function toTransformer<A, B>(transformer: (value: A) => B) {
    return function (params: TransformFnParams): B | undefined {
        if (params.value === undefined) {
            return undefined;
        }
        return transformer(params.value);
    };
}
