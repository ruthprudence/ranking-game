// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { validateTopicAsync } from '../validate/validateSlice';
import { PAGES, ERRORS } from '../../features/constants';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: PAGES.SPLASH,
    items: [],
    rows: ['', '', ''],
    isSubmissionSuccessful: false,
    validationError: '',
    isTopicValid: false,
    areInputsValid: false,
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
  // extraReducers: (builder) => {
  //   builder.addCase(validateTopicAsync.fulfilled, (state, action) => {
  //     state.isSubmissionSuccessful = true;
  //     state.validationError = '';
  //   });
  //   builder.addCase(validateTopicAsync.rejected, (state, action) => {
  //     state.isSubmissionSuccessful = false;
  //     state.validationError = action.payload;
  //   });
  // },
});

export const { setCurrentPage, advancePage } = gameSlice.actions;
export default gameSlice.reducer;
