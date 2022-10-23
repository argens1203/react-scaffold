import React, { CSSProperties, PropsWithChildren } from 'react';

import { useGetDimension } from '../../hooks/use-get-dimension';

type Props = { style?: CSSProperties };
type StyleProps = PropsWithChildren<Props>;

export function WindowSizeSquare(props: StyleProps) {
    const { children, style } = props;
    const dimension = useGetDimension();
    const side = Math.min(dimension.width, dimension.height);
    return (
        <div style={{ width: side, height: side, ...style }}>{children}</div>
    );
}

WindowSizeSquare.defaultProps = { style: {} };
