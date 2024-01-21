// src/features/matchup/matchupSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { pairingLogic } from '../../utils/pairingLogic';

export const matchupSlice = createSlice({
  name: 'matchup',
  initialState: {
    rows: ['', '', ''],
    items: [],
    value: '',
    currentPairIndex: 0,
    isComparisonComplete: false,
    scores: {},
    rankings: [],
    pairs: [],
  },
  reducers: {
    generatePairs: (state, action) => {
        console.log("generatePairs called with items:", action.payload);
        const items = action.payload;  // Receive items as action payload
        if (!items || items.length < 2) {
          console.warn('generatePairs - Not enough items to generate pairs.');
          state.pairs = [];
          return;
        }
        const pairs = pairingLogic(items);
        console.log('generatePairs - pairs generated:', pairs);
        state.pairs = pairs;
        },

        selectChoice: (state, action) => {
            const selectedChoice = action.payload;
            const updatedItems = state.items.map(item => {
                if (item.name === selectedChoice) {
                    return { ...item, votes: item.votes + 1 };
                }
                return item;
            });

            state.items = updatedItems;

            if (state.currentPairIndex < state.pairs.length - 1) {
                state.currentPairIndex += 1;
            } else {
                state.isComparisonComplete = true;
            }
        },

        calculateScores: (state) => {
            const scores = state.items.reduce((acc, item) => {
                acc[item.id] = item.votes;
                return acc;
            }, {});
            state.scores = scores;
        },

        calculateRankings: (state) => {
            const sortedChoices = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);
            let lastScore = null;
            let rank = 0;
            const rankings = sortedChoices.map(([id, score], index) => {
                if (score !== lastScore) {
                    rank = index + 1;
                    lastScore = score;
                }
                const itemName = state.items.find(item => item.id.toString() === id).name;
                return { itemName, score, rank };
            });
            state.rankings = rankings;
        },

        initializeScores: (state) => {
            const initialScores = {};
            state.rows.forEach(choice => {
                initialScores[choice.trim()] = 0;
            });
            state.scores = initialScores;
        },
    }
}); 

export const {
    generatePairs,
    selectChoice,
    calculateScores,
    calculateRankings,
    initializeScores,
} = matchupSlice.actions;

export const selectRankings = (state) => state.matchup.rankings;

export default matchupSlice.reducer;
