import React from 'react';

import { Suit, getFaceValue, getSuit } from '..';

type Props = {
    value: number;
    suit: Suit;
};

export function Card(props: Props) {
    const { value, suit } = props;
    return (
        <div
            style={{
                padding: 5,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'black',
                display: 'flex',
            }}
        >{`${getSuit(suit)}${getFaceValue(value)}`}</div>
    );
}
