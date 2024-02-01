// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import uiReducer from './features/ui/uiSlice';
import validateReducer from './features/validate/validateSlice';
import bugReducer from './features/bug/bugSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    ui: uiReducer,
    validate: validateReducer,
    bug: bugReducer,
  },
});
