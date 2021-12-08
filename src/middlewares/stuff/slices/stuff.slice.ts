import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { logger } from '../../../utils/logger/logger';
import {Stuff} from '../entities';
import {StuffState, initialStuffState} from './initial-state';

type PutStuffActionPayload = Stuff;

const putStuffExample: CaseReducer<StuffState, PayloadAction<PutStuffActionPayload>> = (state, action) => {
    const stuff: Stuff = action.payload;
    state.lookup[stuff.id] = stuff;
};

const stuffSlice = createSlice({
    name: 'stuff',
    initialState: initialStuffState,
    reducers: {
        putStuff: putStuffExample,
        upsertStuff: (state, action: PayloadAction<Partial<Stuff>>) => {
            const stuff = action.payload;
            const id = stuff?.id;
            if (!id){
                logger.warn('There is no Stuff associated with this id.')
                return;
            }
            state.lookup[id] = Object.assign({}, state.lookup[id], stuff);
        }
    }
});

export const stuffReducer = stuffSlice.reducer;
export const {putStuff, upsertStuff} = stuffSlice.actions; 