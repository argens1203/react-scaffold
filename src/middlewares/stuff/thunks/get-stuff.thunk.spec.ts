import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { initialUiState } from "../../ui/slices/initial-state";
import { initialStuffState } from "../slices/initial-state";
import { setLoading } from '../../ui/slices/ui.slice';
import { putStuff } from '../slices/stuff.slice';
import {getStuff} from './get-stuff.thunk';

const getStore = () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({stuff: initialStuffState, ui: initialUiState});
    return store;
}
// Using spied function modifies slice/actions which make them not return pure JS objects

describe('get stuff thunk', () => {
    describe('api successfully returns stuff', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('should start ui loading immediately', async () => {
            const store = getStore();
            await store.dispatch(getStuff('id'));

            const actions = store.getActions();
            expect(actions).toContainEqual(setLoading(true));
        });

        it('should dispatch putStuff on success', async () => {
            const store = getStore();
            await store.dispatch(getStuff('id'));

            const actions = store.getActions();
            expect(actions).toContainEqual(expect.objectContaining({
                payload: expect.objectContaining({
                    id: 'id',
                }),
            }));
        })
    })
});
