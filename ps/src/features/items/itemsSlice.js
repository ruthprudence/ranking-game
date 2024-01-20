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

    // Action to calculate scores
    calculateScores: (state) => {
      state.scores = calculateScores(state.items);
    },

    // Action to calculate rankings
    calculateRankings: (state) => {
      state.rankings = calculateRankings(state.items, state.scores);
    },
  }
});

export const { calculateScores, calculateRankings } = itemsSlice.actions;

// Selectors
export const selectRankings = (state) => state.items.rankings;

export default itemsSlice.reducer;
