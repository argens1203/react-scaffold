import { initialUiState } from "./initial-state";
import {setError, setLoading, uiReducer as reducer} from './ui.slice';
import {AnyAction} from '@reduxjs/toolkit';

describe('stuff slice', () => {
    it('should initialize', () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual(initialUiState);
    });

    test('set error', () => {
        const nextState = reducer(initialUiState, setError('error'));
        expect(nextState.errorMessage).toBe('error');
    });

    test('set loading', () => {
        let state = reducer(initialUiState, setLoading(false));
        expect(state.loading).toBe(false);

        state = reducer(state, setLoading(true));
        expect(state.loading).toBe(true);
    });
});