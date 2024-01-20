// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import matchupReducer from './features/matchup/matchupSlice';
import itemsReducer from './features/items/itemsSlice';
import uiReducer from './features/ui/uiSlice';


export const store = configureStore({
  reducer: {
    game: gameReducer,
    matchup: matchupReducer,
    items: itemsReducer,
    ui: uiReducer,
  },
});
