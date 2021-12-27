import React from 'react';

import { Provider } from 'react-redux';

import { store } from './store';

export function getComponentWithRedux(Inner: React.ComponentType) {
    return function () {
        return (
            <Provider store={store}>
                <Inner />
            </Provider>
        );
    };
}
