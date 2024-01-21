// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
// import { store } from '../../store'; // Import store
import { generatePairs } from '../matchup/matchupSlice'; 
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
        console.log('setCurrentPage:', action.payload);
        state.currentPage = action.payload;
    },
    setTopic: (state, action) => {
        console.log('setTopic:', action.payload);
        state.topic = action.payload;
    },
    addItem: (state) => {
        state.items.push('');
        console.log('addItem - items:', state.items);
    },
    updateItem: (state, action) => {
        const { index, value } = action.payload;
        state.items[index] = value;
        console.log(`updateItem - items[${index}]:`, value);
    },
    removeItem: (state, action) => {
        state.items.splice(action.payload, 1);
        console.log('removeItem - items:', state.items);
    },
    setItems: (state, action) => {
        state.items = action.payload;
        console.log('setItems - items:', state.items);
    },
    addRow: (state) => {
        if (state.rows.length < MAXCHOICES) {
          state.rows.push('');
          console.log('addRow - rows:', state.rows);
        }
    },
    removeRow: (state, action) => {
        if (state.rows.length > MINCHOICES) {
          state.rows.splice(action.payload, 1);
          console.log('removeRow - rows:', state.rows);
        }
    },
    updateRow: (state, action) => {
        const { index, updatedValue } = action.payload;
        state.rows[index] = updatedValue;
        // console.log(`updateRow - rows[${index}]:`, updatedValue);
    },
    setValue: (state, action) => {
        state.value = action.payload;
        console.log('setValue:', action.payload);
    },
    submitInputPage: (state, action) => {
        const rows = action.payload;
        console.log('submitInputPage - rows:', rows);

        // validation checks
        if (rows.some(row => !row.trim())) {
          console.log('submitInputPage - validation error: empty row');
          alert('All items must be filled in.');
          return;
        }
        if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
          console.log(`submitInputPage - validation error: number of rows out of range (${rows.length})`);
          alert(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
          return;
        }

        const itemsWithVotes = state.rows.map((row, index) => ({
            id: index,
            name: row,
            votes: 0
        }));
        state.items = itemsWithVotes;
  
        state.currentPage = 'MATCHUP_PAGE'; // Update the currentPage
        console.log('submitInputPage - currentPage updated to:', state.currentPage);
    },
  }
});

export const {setTopic, addItem, updateItem, removeItem, setItems, addRow, removeRow, updateRow, setValue, submitInputPage, setCurrentPage } = gameSlice.actions;
export default gameSlice.reducer;
