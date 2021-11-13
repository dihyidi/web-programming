import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../models/film';
import { SelectedFilm } from '../models/selectedFilm';
import type { RootState } from './store';

export interface FilmCartState {
    selectedFilms: { [key: number]: SelectedFilm };
}

const initialState: FilmCartState = {
    selectedFilms: []
}

export const filmCartSlice = createSlice({
    name: 'selectedFilms',
    initialState,
    reducers: {
        addFilm: (state, action: PayloadAction<Film>) => {
            const film = action.payload;
            state.selectedFilms[film.id] = { film: film, amount: 1 };
        },
        removeFilm: (state, action: PayloadAction<Film>) => {
            delete state.selectedFilms[action.payload.id]
        },
        addAmount: (state, action: PayloadAction<number>) => {
            state.selectedFilms[action.payload].amount++;
        },
        removeAmount: (state, action: PayloadAction<number>) => {
            state.selectedFilms[action.payload].amount--;
        },
    },
})

export const { addFilm, removeFilm, addAmount, removeAmount } = filmCartSlice.actions

export const selectFilms = (state: RootState) => state.filmCart

export default filmCartSlice.reducer