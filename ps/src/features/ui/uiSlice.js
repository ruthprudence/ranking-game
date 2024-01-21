// src/features/ui/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { MAXCHOICES, MINCHOICES } from '../../utils/constants';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      currentPage: 'INPUT_PAGE',
      topic: '',
      rows: ['', '', ''],
      items: [],
      value: '',
    },
    reducers: {

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

export const {addRow, removeRow, updateRow, submitInputPage } = uiSlice.actions;
export default uiSlice.reducer;


