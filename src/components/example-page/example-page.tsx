import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ElementFromParam } from './element-from-param';
import { Home } from './home';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/:elem', element: <ElementFromParam /> },
]);

export function ExamplePage() {
    return <RouterProvider router={router} />;
}
