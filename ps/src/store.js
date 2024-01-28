// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import uiReducer from './features/ui/uiSlice';
import validateReducer from './features/validate/validateSlice';
import matchupReducer from './features/matchup/matchupSlice';
import resultsReducer from './features/results/resultsSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    ui: uiReducer,
    validate: validateReducer,
    matchup: matchupReducer,
    results: resultsReducer,
  },
});
