// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { submitInputPage } from '../actions';
import { submitTopic } from '../ui/uiSlice';

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
  },
  extraReducers: (builder) => {
    builder
        .addCase(submitTopic, (state, action) => {
            if (state.isSubmissionSuccessful) {
                state.currentPage = 'INPUT_PAGE';
            }
        })
        .addCase(submitInputPage, (state) => {
            state.currentPage = 'MATCHUP_PAGE';
        });
},


});

export const { setCurrentPage } = gameSlice.actions;
export default gameSlice.reducer;