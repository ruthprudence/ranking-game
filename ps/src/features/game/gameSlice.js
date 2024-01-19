// src/features/game/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    // Initial state goes here
  },
  reducers: {
    // Reducers go here
  },
});

// Export actions and reducer
export const { /* export actions here */ } = gameSlice.actions;
export default gameSlice.reducer;
