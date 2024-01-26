// src/features/matchup/matchupSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { pairingLogic } from '../../utils/matchup/pairingLogic';
import {calculateScores} from '../../utils/matchup/calculateScores';
import { calculateRankings } from '../../utils/matchup/calculateRankings';
import { initializeScores } from '../../utils/matchup/initializeScores';


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
    handleChoice: (state, action) => {
      const choiceName = action.payload;
      state.items = state.items.map(item => {
        if (item.name === choiceName) {
          return { ...item, votes: (item.votes || 0) + 1 };
        }
        return item;
      });
      state.currentPairIndex += 1;
    },

    selectChoice: (state, action) => {
      const choiceName = action.payload;
      const updatedItems = state.items.map(item => {
        if (item.name === choiceName) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      });
      state.items = updatedItems;
      state.currentPairIndex += 1; // Increment the currentPairIndex
    },
    generatePairs: (state, action) => {
      const items = Array.isArray(action.payload) ? action.payload : [];
      if (items.length < 2) {
        state.pairs = [];
        return;
      }
      state.pairs = pairingLogic(items);
    },
    completeMatchup: (state) => {
      if (state.currentPairIndex >= state.pairs.length) {
        state.isComparisonComplete = true;

        // Use the extracted functions
        state.scores = calculateScores(state);
        // state.rankings = calculateRankings(state);
        state.rankings = calculateRankings(state); // Ensure this is correctly called
      }
    },
  },
});

export const {
  selectChoice,
  completeMatchup,
  generatePairs,
  handleChoice
} = matchupSlice.actions;

export const selectRankings = (state) => state.matchup.rankings;

export default matchupSlice.reducer;