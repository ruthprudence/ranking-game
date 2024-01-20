// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: 'SPLASH_PAGE',
    topic: '',
    items: []
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
    }, // Add a comma here
}
});

// Export actions and reducer
export const { setCurrentPage, setTopic, addItem, updateItem, removeItem, setItems } = gameSlice.actions;
export default gameSlice.reducer;
