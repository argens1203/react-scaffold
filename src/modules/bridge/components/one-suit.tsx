import React from 'react';

import { Suit, getFaceValue, getSuit } from '..';

type Props = {
    suit: Suit;
    cards: number[];
};

export function OneSuit(props: Props) {
    const { suit, cards } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 5 }}>
            <div>{getSuit(suit)}</div>
            <div style={{ display: 'inline-flex', flexDirection: 'row' }}>
                {cards
                    .sort((a, b) => (b === 1 ? 1 : b - a))
                    .map((c) => (
                        <div>{getFaceValue(c)}</div>
                    ))}
            </div>
        </div>
    );
}
