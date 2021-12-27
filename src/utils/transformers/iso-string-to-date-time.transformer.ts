import { DateTime } from 'luxon';

import { toTransformer } from './hof';

export function isoStringToDateTime() {
    return toTransformer((s: string) => DateTime.fromISO(s));
}
