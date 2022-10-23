import React, { CSSProperties } from 'react';

import { ContainerProps } from '../../types/prop-types';

type Props = { innerStyle?: CSSProperties };

export function Center(props: ContainerProps<Props>) {
    const { children, style = {}, innerStyle = {} } = props;
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                ...style,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    ...innerStyle,
                }}
            >
                {children}
            </div>
        </div>
    );
}
