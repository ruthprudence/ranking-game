import { createSlice } from '@reduxjs/toolkit';

export const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    muted: true,
    sounds: {},
  },
  reducers: {
    toggleMute: (state) => {
      state.muted = !state.muted;
    },
    loadSound: (state, action) => {
      const { name, src } = action.payload;
      state.sounds[name] = { src, loaded: false };
    },
    soundLoaded: (state, action) => {
      const { name } = action.payload;
      if (state.sounds[name]) {
        state.sounds[name].loaded = true;
      }
    },
    playSound: (_, action) => {
    console.log(`  Playing sound through slice: ${action.payload.name}`);
  },
  }
});

export const { toggleMute, loadSound, soundLoaded, playSound } = audioSlice.actions;
export default audioSlice.reducer;
