import { Suit, Position } from '../enums';

export type Hand = {
    [suit in Suit]: number[];
};

type Deal = {
    number: number;
    contract: {
        level: number;
        trump: Suit;
    };
    dealer: Position;
    declarer: Position;
    hands: {
        [position in Position]: Hand;
    };
};

export const DEAL: Deal = {
    number: 1,
    contract: {
        level: 3,
        trump: Suit.CLUB,
    },
    dealer: Position.NORTH,
    declarer: Position.SOUTH,
    hands: {
        [Position.NORTH]: {
            [Suit.SPADE]: [1, 11],
            [Suit.HEART]: [13, 10, 6, 2],
            [Suit.DIAMOND]: [1, 10, 2],
            [Suit.CLUB]: [1, 10, 5, 2],
        },
        [Position.EAST]: {
            [Suit.SPADE]: [12, 9, 8, 7],
            [Suit.HEART]: [12, 7, 5],
            [Suit.DIAMOND]: [8],
            [Suit.CLUB]: [11, 8, 7, 6, 3],
        },
        [Position.SOUTH]: {
            [Suit.SPADE]: [13, 5],
            [Suit.HEART]: [1, 9, 8],
            [Suit.DIAMOND]: [13, 7, 6, 5, 4, 3],
            [Suit.CLUB]: [12, 9],
        },
        [Position.WEST]: {
            [Suit.SPADE]: [10, 6, 4, 3, 2],
            [Suit.HEART]: [11, 4, 3],
            [Suit.DIAMOND]: [12, 11, 9],
            [Suit.CLUB]: [13, 4],
        },
    },
};
