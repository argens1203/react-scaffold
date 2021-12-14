import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { initialUiState } from "../../ui/slices/initial-state";
import { initialStuffState } from "../slices/initial-state";
import * as uiSlice from '../../ui/slices/ui.slice';
import {getStuff} from './get-stuff.thunk';

describe('get stuff thunk', () => {
    describe('api successfully returns stuff', () => {
        it('should start ui loading immediately', () => {
            const mockStore = configureMockStore([thunk]);
            const store = mockStore({stuff: initialStuffState, ui: initialUiState});
            const spied = jest.spyOn(uiSlice, 'setLoading');
            
            store.dispatch(getStuff('id'));
            expect(spied).toBeCalledWith(true);
        })
    })
});
