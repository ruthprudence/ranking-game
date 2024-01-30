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
      console.log("Starting matchup with items:", items);
      console.log("Generated pairs:", state.pairs);
      state.currentPairIndex = 0;
      state.isComparisonComplete = false;
    },
    nextPair: (state) => {
      console.log("Current pair index before update:", state.currentPairIndex);
      console.log("Pairs:", state.pairs);

      if (state.currentPairIndex < state.pairs.length - 1) {
        state.currentPairIndex += 1;
      } else {
        state.isComparisonComplete = true;
      }

      console.log("Updated current pair index:", state.currentPairIndex);
      console.log("New Current Pair:", state.pairs[state.currentPairIndex]);

      console.log("Is comparison complete:", state.isComparisonComplete);
    },
  },
});

export const { startMatchup, nextPair, handleChoice } = matchupSlice.actions;

export default matchupSlice.reducer;
