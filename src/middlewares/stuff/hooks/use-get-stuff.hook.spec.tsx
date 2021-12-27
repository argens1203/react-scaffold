import React from 'react';

import { render, screen } from '@testing-library/react';

import { getComponentWithRedux } from '../../get-component-with-redux';
import { store } from '../../store';
import { putStuff } from '../slices/stuff.slice';

import { useGetStuff } from './use-get-stuff.hook';

describe('use get stuff hook', () => {
    beforeAll(() => {
        store.dispatch(putStuff({ id: 'some id', data: 'some data' }));
    });

    it('can retrieve stuff', () => {
        function Inner() {
            const stuff = useGetStuff('some id');
            return <span>{JSON.stringify(stuff)}</span>;
        }
        const TestComponent = getComponentWithRedux(Inner);
        render(<TestComponent />);

        const stuffDetails = screen.getByText(/some id/i);
        expect(stuffDetails).toHaveTextContent('some data');
    });
});
