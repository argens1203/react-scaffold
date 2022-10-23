import React from 'react';

import { useParams } from 'react-router-dom';

import { ELEM, exampleRecord } from './constants';
import { Home } from './home';

export function ElementFromParam() {
    const params = useParams();
    const elem = params[ELEM] || '';
    return React.createElement(exampleRecord[elem] || Home);
}
