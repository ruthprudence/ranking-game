// uiSlice.js
import { createSlice, createAction} from '@reduxjs/toolkit';
import { calculateRankings } from './calculateRankings';
import { calculateScores } from './calculateScores';

// useSelector to get state.ui.items

export const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        scores: {},
        rankings: [],
      },
      reducers : {
        completeMatchup: (state) => {
            if (state.currentPairIndex >= state.pairs.length) {
              state.isComparisonComplete = true;
              state.scores = calculateScores(state);
              state.rankings = calculateRankings(state); 
            }
          },
      },
    });



// export const {  } = resultsSlice.actions;
  
export default resultsSlice.reducer;