import { Suit } from '../enums';

export function getFilledSuit(suit: Suit) {
    switch (suit) {
        case Suit.CLUB:
            return '\u2663';
        case Suit.DIAMOND:
            return '\u2666';
        case Suit.HEART:
            return '\u2665';
        case Suit.SPADE:
        default:
            return '\u2660';
    }
}

export function getHollowSuit(suit: Suit) {
    switch (suit) {
        case Suit.CLUB:
            return '\u2667';
        case Suit.DIAMOND:
            return '\u2662';
        case Suit.HEART:
            return '\u2661';
        case Suit.SPADE:
        default:
            return '\u2664';
    }
}

export function getSuit(suit: Suit, hollow?: false) {
    if (hollow) {
        return getHollowSuit(suit);
    }
    return getFilledSuit(suit);
}
