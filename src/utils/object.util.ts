export function getTruthfulIndexes(
    obj: Record<string, boolean>
): Array<string> {
    return Object.entries(obj)
        .filter(([k, v]) => !!v)
        .map(([k, v]) => k);
}

export function arrayToObj<T>(
    arr: Array<string>,
    initialValue: T
): Record<string, T> {
    const obj: Record<string, T> = {};
    arr.forEach((k) => {
        obj[k] = initialValue;
    });

    return obj;
}
