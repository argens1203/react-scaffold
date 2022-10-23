import React, { PropsWithChildren } from 'react';

import { range } from '../../../utils/array.util';

type Props = { width: number; height: number };

// TODO: performance

export function GridContainer(props: PropsWithChildren<Props>) {
    const { children, width, height } = props;
    const cellWidth = 100 / width;
    const cellHeight = 100 / height;
    const gridTemplateColumns = `${range(width)
        .map((_) => cellWidth)
        .join('% ')}%`;
    const gridTemplateRows = `${range(height)
        .map((_) => cellHeight)
        .join('% ')}%`;

    // eslint-disable-next-line no-console
    console.log(gridTemplateColumns);
    // eslint-disable-next-line no-console
    console.log(gridTemplateRows);
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns,
                // gridTemplateRows,
            }}
        >
            {children}
        </div>
    );
}
