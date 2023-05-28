import { logger } from '../../../utils/logger';
import { AppThunkDispatch } from '../../thunk.type';
import { setError, setLoading } from '../../ui/slices';
import { getStuff as getStuffApi } from '../api/stuff.api';
import { putStuff } from '../slices/stuff.slice';

export function getStuff(id: string) {
    return async function (dispatch: AppThunkDispatch) {
        dispatch(setLoading(true));
        await getStuffApi(id)
            .then((stuff) => {
                if (!stuff) {
                    dispatch(
                        setError(`API Error - Cannot get Stuff with id: ${id}`)
                    );
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
