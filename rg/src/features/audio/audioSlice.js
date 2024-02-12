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
  }
});

export const { toggleMute } = audioSlice.actions;
export default audioSlice.reducer;
