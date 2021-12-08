import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Stuff} from '../entities';
import {StuffState, initialStuffState} from './initial-state';

type PutStuffActionPayload = Stuff;

const putStuff: CaseReducer<StuffState, PayloadAction<PutStuffActionPayload>> = (state, action) => {
    const stuff: Stuff = action.payload;
    state.lookup[stuff.id] = stuff;
};

const stuffSlice = createSlice({
    name: 'stuff',
    initialState: initialStuffState,
    reducers: {
        putStuff,
        upsertStuff: (state, action: PayloadAction<Partial<Stuff>>) => {
            const {id, ...updates} = action.payload;
            if (!id){
                //TODO: error handling
                return;
            }
            state.lookup[id] = Object.assign({}, state.lookup[id], updates);
        }
    }
});

export default stuffSlice.reducer;
export const {putStuff, upsertStuff} = stuffSlice.actions; 