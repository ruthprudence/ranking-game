// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
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
    setItems: (state, action) => {
        state.items = action.payload;
        console.log('setItems - items:', state.items);
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
    setValue: (state, action) => {
        state.value = action.payload;
        console.log('setValue:', action.payload);
    },
  }
});

export const {setTopic, addItem, updateItem, removeItem, setItems, setValue, setCurrentPage } = gameSlice.actions;
export default gameSlice.reducer;
