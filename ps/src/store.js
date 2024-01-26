// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import matchupReducer from './features/matchup/matchupSlice';
import uiReducer from './features/ui/uiSlice';
import validateReducer from './features/validate/validateSlice';


export const store = configureStore({
  reducer: {
    game: gameReducer,
    matchup: matchupReducer,
    ui: uiReducer,
    validate: validateReducer,
  },
});
