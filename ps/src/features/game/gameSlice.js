// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
// import { store } from '../../store'; // Import store
import { generatePairs } from '../matchup/matchupSlice'; 
import { MAXCHOICES, MINCHOICES } from '../../utils/constants';
import { createItemsWithVotes } from '../../utils/gameHelpers';
import { validateRows } from '../../utils/validateRows';
import { submitInputPage } from '../actions';
import { submitTopic } from '../ui/uiSlice';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: 'SPLASH_PAGE',
    items: [],
    rows: ['', '', ''],
    isSUbmissionSuccessful: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
    setTopic: (state, action) => {
        state.topic = action.payload;
    },
    addItem: (state) => {
        state.items.push('');
    },
    updateItem: (state, action) => {
        const { index, value } = action.payload;
        state.items[index] = value;
    },
    removeItem: (state, action) => {
        state.items.splice(action.payload, 1);
    },
    setItems: (state, action) => {
        state.items = action.payload;
    },
    addRow: (state) => {
        if (state.rows.length < MAXCHOICES) {
          state.rows.push('');
        }
    },
    removeRow: (state, action) => {
        if (state.rows.length > MINCHOICES) {
          state.rows.splice(action.payload, 1);
        }
    },
    updateRow: (state, action) => {
        const { index, updatedValue } = action.payload;
        state.rows[index] = updatedValue;
    },
    setValue: (state, action) => {
        state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(submitTopic, (state, action, getState) => {
      const uiState = getState().ui;
      if (uiState.isSubmissionSuccessful) {
          state.currentPage = 'INPUT_PAGE';
      }
  })
      .addCase(submitInputPage, (state, action) => {
        state.currentPage = 'MATCHUP_PAGE';
      });



  },
  
});

export const {setTopic, addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, setCurrentPage} = gameSlice.actions;
export default gameSlice.reducer;
