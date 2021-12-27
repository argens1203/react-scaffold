import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

type Props = {
    passedThreshold: boolean;
    loading: boolean;
};

export function DeletableBackground(props: Props) {
    const { passedThreshold, loading } = props;
    const maxed = '2em';
    const size = passedThreshold ? maxed : '1em';
    const style = { height: size, width: size, color: 'white' };
    return (
        <div
            style={{
                backgroundColor: 'red',
                height: '100%',
                width: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: -1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                overflow: 'hidden',
            }}
        >
            <div style={{ marginRight: maxed }}>
                {loading ? (
                    <CircularProgress variant="indeterminate" style={style} />
                ) : (
                    <Delete style={style} />
                )}
            </div>
        </div>
    );
}
