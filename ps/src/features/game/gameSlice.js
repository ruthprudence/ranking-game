// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { submitInputPage } from '../actions';
import { submitTopic, transitionToMatchup } from '../ui/uiSlice';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: 'SPLASH_PAGE',
    items: [],
    rows: ['', '', ''],
    isSubmissionSuccessful: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
    advancePage: (state) => {
      // Logic to determine the next page
      switch (state.currentPage) {
          case 'SPLASH_PAGE':
              state.currentPage = 'INPUT_PAGE';
              break;
          case 'INPUT_PAGE':
              state.currentPage = 'MATCHUP_PAGE';
              break;
          case 'MATCHUP_PAGE':
              state.currentPage = 'RESULTS_PAGE';
              break;
          case 'RESULTS_PAGE':  // Add a case for the results page
              state.currentPage = 'SPLASH_PAGE';
              break;
      }
  },
  },

});

export const { setCurrentPage, advancePage } = gameSlice.actions;
export default gameSlice.reducer;
