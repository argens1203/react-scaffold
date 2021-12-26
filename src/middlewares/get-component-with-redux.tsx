import { store } from "./store";

import React from "react";
import { Provider } from "react-redux";

export function getComponentWithRedux(Inner: React.ComponentType) {
    return function () {
        return (
            <Provider store={store}>
                <Inner />
            </Provider>
        );
    };
}
