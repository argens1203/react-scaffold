import { Suit } from '../enums';
import { Trump } from '../enums/trump.enum';

import { getSuit } from './suit.util';

export function getTrumpSymbol(trump: Trump) {
    if (trump === Trump.NT) {
        return 'N';
    }
    return getSuit(trump as unknown as Suit);
}
