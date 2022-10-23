import React from 'react';

import { useGetDimension } from '../../hooks/use-get-dimension';
import { Center } from '../center/center';

import { WindowSizeSquare } from './window-size-square';

export function WindowSizeSquareExample() {
    const dimension = useGetDimension();

    return (
        <WindowSizeSquare
            style={{ border: '1px solid black', background: 'gray' }}
        >
            <Center>
                <b>{`${dimension.width} x ${dimension.height}`}</b>
            </Center>
        </WindowSizeSquare>
    );
}
