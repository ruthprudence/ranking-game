// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { validateTopicAsync } from '../validate/validateSlice';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: 'SPLASH_PAGE',
    items: [],
    rows: ['', '', ''],
    isSubmissionSuccessful: false,
    validationError: '',
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    advancePage: (state) => {
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
        case 'RESULTS_PAGE':
          state.currentPage = 'SPLASH_PAGE';
          break;
        default:
          console.error('Invalid page transition');
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateTopicAsync.fulfilled, (state, action) => {
      state.isSubmissionSuccessful = true;
      state.validationError = '';
    });
    builder.addCase(validateTopicAsync.rejected, (state, action) => {
      state.isSubmissionSuccessful = false;
      state.validationError = action.payload;
    });
  },
});

export const { setCurrentPage, advancePage } = gameSlice.actions;
export default gameSlice.reducer;
