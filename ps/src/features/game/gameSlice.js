// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { MAXCHOICES, MINCHOICES } from '../../utils/constants';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: 'SPLASH_PAGE',
    topic: '',
    rows: ['', '', ''],
    items: [],
    value: '',
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
      submitInputPage: (state, action) => {
        const rows = action.payload;
        if (rows.some(row => !row.trim())) {
          alert('All items must be filled in.');
          return;
        }
        if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
          alert(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
          return;
        }
        const itemsWithVotes = rows.map((name, index) => ({ id: index, name, votes: 0 }));
        state.items = itemsWithVotes;
        state.currentPage = 'MATCHUP_PAGE';
      },
  
}
});

export const { setCurrentPage, setTopic, addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, submitInputPage } = gameSlice.actions;
export default gameSlice.reducer;