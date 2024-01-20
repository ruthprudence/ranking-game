// src/features/matchup/matchupSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const matchupSlice = createSlice({
  name: 'matchup',
  initialState: {
    rows: ['', '', ''],
    items: [],
    value: '',
    currentPairIndex: 0,
    isComparisonComplete: false,
    scores: {},
    rankings: [],
    pairs: [],
  },
  reducers: {
    // Existing reducers...

    // Generate pairs based on the number of items
    generatePairs: (state) => {
      if (state.items.length < 2) {
        state.pairs = [];
      } else {
        const pairs = [];
        for (let start = 1; start < state.items.length; start++) {
          for (let row = start, col = 0; row < state.items.length; row++, col++) {
            pairs.push([row, col]);
          }
        }
        state.pairs = pairs;
      }
    },

    // Handle choice selection
    selectChoice: (state, action) => {
      const selectedChoice = action.payload;
      const updatedItems = state.items.map(item => {
        if (item.name === selectedChoice) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      });

      state.items = updatedItems;

      if (state.currentPairIndex < state.pairs.length - 1) {
        state.currentPairIndex += 1;
      } else {
        state.isComparisonComplete = true;
      }
    },

    // Calculate scores
    calculateScores: (state) => {
      const scores = state.items.reduce((acc, item) => {
        acc[item.id] = item.votes;
        return acc;
      }, {});
      state.scores = scores;
    },

    // Calculate rankings
    calculateRankings: (state) => {
      const sortedChoices = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);
      let lastScore = null;
      let rank = 0;
      const rankings = sortedChoices.map(([id, score], index) => {
        if (score !== lastScore) {
            rank = index + 1;
            lastScore = score;
        }
        const itemName = state.items.find(item => item.id.toString() === id).name;
        return { itemName, score, rank };
      });
      state.rankings = rankings;
    },

    // Additional reducers...

  }
});

export const {
  generatePairs,
  selectChoice,
  calculateScores,
  calculateRankings,
  // Other exports...
} = matchupSlice.actions;

export default matchupSlice.reducer;
