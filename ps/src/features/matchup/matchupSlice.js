import { createSlice } from '@reduxjs/toolkit';
import { pairingLogic } from './pairingLogic';

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
      state.currentPairIndex = 0;
      state.isComparisonComplete = false;
    },
    nextPair: (state) => {
      if (state.currentPairIndex < state.pairs.length - 1) {
        state.currentPairIndex += 1;
      } else {
        state.isComparisonComplete = true;
      }
    },
    handleChoice: (state) => {
      if (state.currentPairIndex < state.pairs.length - 1) {
        state.currentPairIndex += 1;
      } else {
        state.isComparisonComplete = true;
      }
    },
  },
});

export const { startMatchup, nextPair, handleChoice } = matchupSlice.actions;

export default matchupSlice.reducer;
