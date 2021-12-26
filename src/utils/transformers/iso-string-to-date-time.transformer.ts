import { toTransformer } from "./hof";

import { DateTime } from "luxon";

export function isoStringToDateTime() {
    return toTransformer((s: string) => DateTime.fromISO(s));
}
