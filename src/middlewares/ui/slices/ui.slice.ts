import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { initialUiState } from './initial-state';

const stuffSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            const errorMessage = action.payload;
            state.errorMessage = errorMessage;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            const loading = action.payload;
            state.loading = loading;
        }
    }
});

export const stuffReducer = stuffSlice.reducer;
export const {setError, setLoading} = stuffSlice.actions;