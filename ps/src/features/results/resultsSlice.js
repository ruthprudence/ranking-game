import { createSlice } from '@reduxjs/toolkit';
import { calculateRankings } from './calculateRankings';
import { calculateScores } from './calculateScores';

export const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        scores: {},
        rankings: [],
    },
    reducers: {
        completeMatchup: (state, action) => {
            const items = action.payload;
            state.scores = calculateScores(items);
            state.rankings = calculateRankings(items, state.scores);
        },
    },
});

export const { completeMatchup } = resultsSlice.actions;
export default resultsSlice.reducer;
