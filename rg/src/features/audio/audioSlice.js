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
    playSound: (state, action) => {
      const { name } = action.payload;
      if (!state.muted) {
        const audio = new Audio(`/assets/audio/${name}.wav`);
        audio.play().catch(error => console.error(`Error playing sound: ${name}`, error));
      }
    },
  }
});

export const { toggleMute, playSound } = audioSlice.actions;
export default audioSlice.reducer;
