import React from 'react';

import { Center } from './center';

export function CenterExample() {
    return (
        <div
            style={{
                width: 300,
                height: 300,
                border: '1px solid black',
            }}
        >
            <Center innerStyle={{ backgroundColor: 'cyan' }}>
                <div style={{ backgroundColor: 'gray' }}>
                    This is now centered
                </div>
            </Center>
        </div>
    );
}
