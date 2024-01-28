// uiSlice.js
import { createSlice, createAction} from '@reduxjs/toolkit';
import { calculateRankings } from './calculateRankings';
import { calculateScores } from './calculateScores';

export const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        scores: {},
        rankings: [],
      },
      reducers : {

      },
    });



// export const {  } = resultsSlice.actions;
  
export default resultsSlice.reducer;