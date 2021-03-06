import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducer from './reducers';

export const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;