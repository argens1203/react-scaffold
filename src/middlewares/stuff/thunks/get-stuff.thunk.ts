import {getStuff as getStuffApi} from '../api/stuff.mock.api';
import { AppThunkDispatch } from "../../thunk.type";
import { putStuff } from '../slices/stuff.slice';

export function getStuff(id: string){
    return async function (dispatch: AppThunkDispatch) {
        // TODO: Loading UI
        await getStuffApi(id)
            .then((stuff)=>{
                if (!stuff){
                    // TODO: Error UI
                    return;
                }
                dispatch(putStuff(stuff));
            })
            .catch(() => {
                // TODO: Error UI
            })
            .finally(() => {
                // TODO: End Loading UI
            });
    }
}