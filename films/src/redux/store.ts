import { Action, combineReducers, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import filmCartReducer from "./filmCartSlice";

import * as Films from './filmCartSlice';

export interface AppState {
    selectedFilms: Films.FilmCartState
}

const rootReducer = () =>
    combineReducers({
        filmCart: filmCartReducer
    });

export const createStore = () => configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<ReturnType<typeof rootReducer>>

export type AppDispatch = ThunkDispatch<RootState, any, Action>;

export type AppThunk<T = void> = ThunkAction<T, RootState, any, Action>;

