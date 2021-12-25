import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialUiState } from '../../ui/slices/initial-state';
import { initialStuffState } from '../slices/initial-state';
import { setLoading, setError } from '../../ui/slices/ui.slice';
import { putStuff } from '../slices/stuff.slice';
import { getStuff } from './get-stuff.thunk';
import * as GetStuffApi from '../api/stuff.mock.api';

const getStore = () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({ stuff: initialStuffState, ui: initialUiState });
  return store;
};
// Using spied function modifies slice/actions which make them not return pure JS objects

describe('get stuff thunk', () => {
  describe('api successfully returns stuff', () => {
    it('should start ui loading immediately', async () => {
      const store = getStore();
      await store.dispatch(getStuff('id'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setLoading(true));
      expect(actions[actions.length - 1]).toEqual(setLoading(false));
      expect(actions).toContainEqual(expect.objectContaining({
        payload: expect.objectContaining({
          id: 'id',
        }),
      }));
    });

    it('should dispatch putError on null return', async () => {
      const spied = jest.spyOn(GetStuffApi, 'getStuff');
      spied.mockResolvedValueOnce(null);

      const store = getStore();
      await store.dispatch(getStuff('id'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setLoading(true));
      expect(actions[actions.length - 1]).toEqual(setLoading(false));

      expect(actions).toContainEqual(expect.objectContaining({
        type: setError('').type,
      }));
    });

    it('should dispatch putError on api error', async () => {
      const spied = jest.spyOn(GetStuffApi, 'getStuff');
      spied.mockRejectedValueOnce({ message: 'api error' }); // TODO: mimic shape of api error

      const store = getStore();
      await store.dispatch(getStuff('id'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setLoading(true));
      expect(actions[actions.length - 1]).toEqual(setLoading(false));

      expect(actions).toContainEqual(expect.objectContaining({
        type: setError('').type,
        payload: 'api error',
      }));
    });
  });
});
