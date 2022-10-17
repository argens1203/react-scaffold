import React, { PropsWithChildren } from 'react';

type Props = { width: number; height: number };

// TODO: performance

export function GridContainer(props: PropsWithChildren<Props>) {
    const { children, width, height } = props;
    const cellWidth = 100 / width;
    const cellHeight = 100 / height;
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `${cellHeight}% ${cellHeight}% ${cellHeight}%`,
                gridTemplateRows: `${cellWidth}% ${cellWidth}% ${cellWidth}%`,
            }}
        >
            {children}
        </div>
    );
}
