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
      state.currentPairIndex = state.currentPairIndex < state.pairs.length - 1 ? state.currentPairIndex + 1 : state.currentPairIndex;
      state.isComparisonComplete = state.currentPairIndex >= state.pairs.length - 1;
    },
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
