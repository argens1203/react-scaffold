import React from 'react';

import { GridContainer } from '../../../components/containers';
import { MaxContract } from '../constants';
import { Position } from '../enums';
import { Trump } from '../enums/trump.enum';
import { getShortForm, getTrumpSymbol } from '../utils';

type Props = {
    maxContract: MaxContract;
};

const POSITIONS = [
    Position.NORTH,
    Position.SOUTH,
    Position.EAST,
    Position.WEST,
];

export function BridgePossibleContractGrid(props: Props) {
    const { maxContract } = props;
    // eslint-disable-next-line no-console
    console.log(maxContract);

    return (
        <div style={{ backgroundColor: 'grey' }}>
            <GridContainer width={6} height={5}>
                <div />
                <div>{getTrumpSymbol(Trump.NT)}</div>
                <div>{getTrumpSymbol(Trump.SPADE)}</div>
                <div>{getTrumpSymbol(Trump.HEART)}</div>
                <div>{getTrumpSymbol(Trump.DIAMOND)}</div>
                <div>{getTrumpSymbol(Trump.CLUB)}</div>
                {POSITIONS.map((pos) =>
                    [<div>{getShortForm(pos)}</div>].concat(
                        Object.values(maxContract[pos]).map((s) => (
                            <div>{s === 0 ? null : s}</div>
                        ))
                    )
                )}
            </GridContainer>
        </div>
    );
}
