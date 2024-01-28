import { createSlice } from '@reduxjs/toolkit';
import { pairingLogic } from './pairingLogic';
import { calculateScores } from '../results/calculateScores';
import { calculateRankings } from '../results/calculateRankings';
import { selectItems as selectUiItems } from '../ui/uiSlice';

export const matchupSlice = createSlice({
  name: 'matchup',
  initialState: {
    currentPairIndex: 0,
    isComparisonComplete: false,
    pairs: [],
  },
  reducers: {
    startMatchup: (state, action) => {
      const items = action.payload;
      state.pairs = pairingLogic(items);
    },

    nextPair: (state) => {
      if (state.currentPairIndex < state.pairs.length) {
        state.currentPairIndex += 1;
      } else {
        state.isComparisonComplete = true;
        state.scores = calculateScores(state);
        state.rankings = calculateRankings(state);
      }
    },
    handleChoice: (state, action) => {
      // Your existing logic
    },
    selectChoice: (state, action) => {
      state.currentPairIndex += 1;
    },
    completeMatchup: (state) => {
      // Your existing logic
    },
  },
});

export const { 
  startMatchup, 
  nextPair, 
  handleChoice, 
  selectChoice, 
  completeMatchup 
} = matchupSlice.actions;


export const selectRankings = (state) => state.matchup.rankings;

export default matchupSlice.reducer;
