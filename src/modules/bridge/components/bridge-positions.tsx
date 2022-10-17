import React from 'react';

export function BridgePositions() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'gray',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '33% 33% 33%',
                    gridTemplateRows: '33% 33% 33%',
                }}
            >
                <div style={{ margin: 5 }} />
                <div style={{ margin: 5 }}>N</div>
                <div style={{ margin: 5 }} />
                <div style={{ margin: 5 }}>W</div>
                <div style={{ margin: 5 }} />
                <div style={{ margin: 5 }}>E</div>
                <div style={{ margin: 5 }} />
                <div style={{ margin: 5 }}>S</div>
                <div style={{ margin: 5 }} />
            </div>
        </div>
    );
}
