import { createSlice } from '@reduxjs/toolkit';
import { pairingLogic } from './pairingLogic';
import { calculateScores } from './calculateScores';
import { calculateRankings } from './calculateRankings';
import { selectItems as selectUiItems } from '../ui/uiSlice';

export const matchupSlice = createSlice({
  name: 'matchup',
  initialState: {
    currentPairIndex: 0,
    isComparisonComplete: false,
    scores: {},
    rankings: [],
    pairs: [],
  },
  reducers: {
    startMatchup: (state, action) => {
      const items = action.payload ? action.payload : selectUiItems(state);
      if (!items) {
        console.error('Items is undefined');
        return;
      }
      state.pairs = items && items.length > 1 ? pairingLogic(items) : [];
      state.currentPairIndex = 0;
      state.isComparisonComplete = false;
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

export const startMatchupAsync = () => (dispatch, getState) => {
  const items = selectUiItems(getState());
  if (items && items.length > 1) {
    dispatch(startMatchup(items));
  }
};
export const selectRankings = (state) => state.matchup.rankings;

export default matchupSlice.reducer;
