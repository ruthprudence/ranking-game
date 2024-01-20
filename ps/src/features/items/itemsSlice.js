// Import the calculateScores and calculateRankings functions
import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    // ...existing state properties
    scores: {},
    rankings: [],
  },
  reducers: {
    // ...existing reducers


  }
});




export default itemsSlice.reducer;
