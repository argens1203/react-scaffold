import { getStuff as getStuffApi } from '../api/stuff.mock.api';
import { AppThunkDispatch } from '../../thunk.type';
import { putStuff } from '../slices/stuff.slice';
import { setLoading, setError } from '../../ui/slices';
import { logger } from '../../../utils/logger';

export function getStuff(id: string) {
  return async function (dispatch: AppThunkDispatch) {
    dispatch(setLoading(true));
    await getStuffApi(id)
      .then((stuff) => {
        if (!stuff) {
          dispatch(setError(`API Error - Cannot get Stuff with id: ${id}`));
          return;
        }
        dispatch(putStuff(stuff));
      })
      .catch((err) => {
        logger.warn(err);
        dispatch(setError(err.message));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
