import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../middlewares/store';

export function getComponentWithRedux(Inner: React.ComponentType){
    function TestComponent(){
        return (
            <Provider store={store}>
                <Inner/>
            </Provider>
        )
    }
    return TestComponent;
}