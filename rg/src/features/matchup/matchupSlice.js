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
      state.currentPairIndex += 1;
      console.log("Updated current pair index:", state.currentPairIndex);
      console.log("New Current Pair:", state.pairs[state.currentPairIndex]);
    },
  },
});

export const { startMatchup, nextPair, handleChoice } = matchupSlice.actions;

export default matchupSlice.reducer;
