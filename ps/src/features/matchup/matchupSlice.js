// src/features/matchup/matchupSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { pairingLogic } from '../../utils/pairingLogic';
import {calculateScores} from '../../utils/calculateScores';
import { calculateRankings } from '../../utils/calculateRankings';
import { initializeScores } from '../../utils/initializeScores';


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
        state.scores = calculateScores(state.items);
        state.rankings = calculateRankings(state.scores, state.items);
      }
    },
  },
});

export const {
  selectChoice,
  completeMatchup,
  generatePairs
} = matchupSlice.actions;

export const selectRankings = (state) => state.matchup.rankings;

export default matchupSlice.reducer;