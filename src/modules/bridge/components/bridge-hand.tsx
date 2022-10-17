import React from 'react';

import { Hand } from '../constants';
import { Suit } from '../enums';

import { OneSuit } from './one-suit';

type Props = {
    hand: Hand;
};

type Input = [Suit, number[]];

export function BridgeHand(props: Props) {
    const { hand } = props;
    return (
        <div
            style={{
                display: 'inline-flex',
                flexDirection: 'column',
                margin: 5,
            }}
        >
            <OneSuit cards={hand[Suit.SPADE]} suit={Suit.SPADE} />
            <OneSuit cards={hand[Suit.HEART]} suit={Suit.HEART} />
            <OneSuit cards={hand[Suit.DIAMOND]} suit={Suit.DIAMOND} />
            <OneSuit cards={hand[Suit.CLUB]} suit={Suit.CLUB} />
        </div>
    );
}
