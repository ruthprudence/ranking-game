import { createSlice } from '@reduxjs/toolkit';
import { calculateRankings } from './calculateRankings';
import { calculateScores } from './calculateScores';

export const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        rankings: [],
    },
    reducers: {
        completeMatchup: (state, action) => {
            const { items, scores } = action.payload;
            state.rankings = calculateRankings(items, scores);
        },
    },
});

export const { completeMatchup } = resultsSlice.actions;
export default resultsSlice.reducer;
