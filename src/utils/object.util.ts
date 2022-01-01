export function getTruthfulIndexes(
    obj: Record<string, boolean>
): Array<string> {
    return Object.entries(obj)
        .filter(([_, v]) => !!v)
        .map(([k, _]) => k);
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

export function arrayToRecord(arr: Array<string>) {
    return arrayToObj(arr, true);
}
