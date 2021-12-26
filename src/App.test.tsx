import App from "./App";
import { store } from "./middlewares/store";

import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";

test("renders learn react link", () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getByText(/learn/i)).toBeInTheDocument();
});
