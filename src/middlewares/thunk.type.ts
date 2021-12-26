import { RootState } from "./store";

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export type AppThunkDispatch<E = unknown> = ThunkDispatch<
    RootState,
    E,
    AnyAction
>;
export type AppThunkGetState = () => RootState;

// thunk accepts a third "injected" param, we allow the typing of it as generic argument E
