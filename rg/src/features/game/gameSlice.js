// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { PAGES, ERRORS } from '../constants';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: PAGES.SPLASH,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    advancePage: (state) => {
      switch (state.currentPage) {
        case 'SPLASH_PAGE':
          state.currentPage = PAGES.INPUT;
          break;
        case 'INPUT_PAGE':
          state.currentPage = PAGES.MATCHUP;
          break;
        case 'MATCHUP_PAGE':
          state.currentPage = PAGES.MATCHUP;
          break;
        case 'RESULTS_PAGE':
          state.currentPage = PAGES.RESULTS;
          break;
        default:
          console.error(ERRORS.PAGE);
      }
    },
  },
});

export const { setCurrentPage, advancePage } = gameSlice.actions;
export default gameSlice.reducer;
