import React from 'react';

import { Position, Suit } from '..';
import { GridContainer } from '../../../components/containers';
import { DEAL } from '../constants/deal.const';

import { BridgeHand } from './bridge-hand';
import { BridgePositions } from './bridge-positions';

type Props = { deal: any };

export function BridgeDeal() {
    const { hands } = DEAL;
    return (
        <div style={{ maxWidth: 300 }}>
            <GridContainer width={3} height={3}>
                <div />
                <BridgeHand hand={hands[Position.NORTH]} />
                <div />
                <BridgeHand hand={hands[Position.WEST]} />
                <BridgePositions />
                <BridgeHand hand={hands[Position.EAST]} />
                <div />
                <BridgeHand hand={hands[Position.SOUTH]} />
                <div />
            </GridContainer>
        </div>
    );
}
