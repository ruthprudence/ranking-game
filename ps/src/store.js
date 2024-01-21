// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import matchupReducer from './features/matchup/matchupSlice';


export const store = configureStore({
  reducer: {
    game: gameReducer,
    matchup: matchupReducer,
  },
});
