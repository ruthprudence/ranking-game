// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentPage: 'SPLASH_PAGE',
    topic: ''
  },
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
    setTopic: (state, action) => {
        state.topic = action.payload;
    }
  },
});

// Export actions and reducer
export const { setCurrentPage, setTopic } = gameSlice.actions;
export default gameSlice.reducer;
