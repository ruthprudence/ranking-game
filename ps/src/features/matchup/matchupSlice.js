// src/features/matchup/matchupSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { pairingLogic } from './pairingLogic';
import {calculateScores} from './calculateScores';
import { calculateRankings } from './calculateRankings';
import { initializeScores } from './initializeScores';
import { selectItems, selectChoice as selectUiChoice } from '../ui/uiSlice';


export const matchupSlice = createSlice({
  name: 'matchup',
  initialState: {
    value: '',
    currentPairIndex: 0,
    isComparisonComplete: false,
    scores: {},
    rankings: [],
    pairs: [],
  },
  reducers: {
    startMatchup: (state, action) => {
      state.pairs = pairingLogic(action.payload);
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
        state.scores = calculateScores(state);
        state.rankings = calculateRankings(state); 
      }
    },
  },
});

export const {
  selectChoice,
  completeMatchup,
  generatePairs,
  handleChoice,
  startMatchup,
  nextPair,
} = matchupSlice.actions;

export const selectRankings = (state) => state.matchup.rankings;

export const startMatchupAsync = () => (dispatch, getState) => {
  const items = selectItems(getState());
  if (items.length > 1) {
    dispatch(startMatchup(items));
  }
};

export const selectChoiceAsync = (choice) => (dispatch) => {
  dispatch(selectUiChoice(choice));
  dispatch(selectChoice());
};

export default matchupSlice.reducer;